const mongoose = require("mongoose");
const bcyrpt = require("bcrypt");
const validator = require("validator");

//importing the conference model
// const Conference = require("./conference");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  role: {
    type: String,
    enum: ["attendee", "admin", "publisher"], // enum is an array of strings
    default: "attendee",
  },

  gender: {
    type: String,
    required: false,
    enum: ["Male", "Female", "Other"], // enum is an array of strings
  },

  linkedin: {
    type: String,
    required: false,
  },

  instagram: {
    type: String,
    required: false,
  },

  // array of registered conferences ID
  registered_conferences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conference",
      default: [],
    },
  ],

  //Profile picture
  profile_picture: {
    type: String,
    required: false,
    default: "",
  },
  papers: [
    {
      title: String,
      fileUrl: String,
      filename: String,
      conference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conference",
      },
    },
  ],
});

// static signup function
userSchema.statics.signup = async function (username, email, password, role) {
  // validation
  if (!username || !email || !password || !role) {
    throw new Error("Please fill all the fields");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 symbol"
    );
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw new Error("Email already exists");
  }

  //   hasing and creating new user
  const salt = await bcyrpt.genSalt(10);
  const hash = await bcyrpt.hash(password, salt);

  const user = await this.create({
    username,
    email,
    password: hash,
    role,
  });

  return user;
};

// static login function

userSchema.statics.login = async function (email, password, role) {
  // validation
  if (!email || !password || !role) {
    throw new Error("Please fill all the fields");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Email or password is incorrect");
  }

  const match = await bcyrpt.compare(password, user.password);

  if (!match) {
    throw new Error("Email or password is incorrect");
  }

  if (user.role !== role) {
    throw new Error("You are not authorized to login");
  }

  return user;
};

// static update function
userSchema.statics.update = async function (email, password) {
  // validation
  if (!email || !password) {
    throw new Error("Please fill all the fields");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Not authorized to update");
  }

  const salt = await bcyrpt.genSalt(10);
  const hash = await bcyrpt.hash(password, salt);
  user.password = hash; // update password
  await user.save();
  return user;
};

//static update function to update profile fields other than password and email
userSchema.statics.updateUserProfile = async function (req) {
  console.log("---------In update user profile function--------");
  const id = req.params.id;
  const user = await this.findOne({ _id: id });

  console.log(user);
  console.log(req.body);

  if (!user) {
    throw new Error("Not authorized to update");
  }

  const updatedUser = await this.findOneAndUpdate({ _id: id }, req.body);
  return updatedUser;
};

// static function to get user by id
userSchema.statics.getUserById = async function (id) {
  const user = await this.findOne({ _id: id });
  console.log(user);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

// static function to get all users
userSchema.statics.getAllUsers = async function () {
  const users = await this.find({});
  return users;
};

//static function to upload an profile picture
userSchema.statics.uploadProfilePicture = async function (req) {
  console.log(
    "---------In upload profile picture function--------\n",
    req.body.userId
  );
  const id = req.body.userId;
  const user = await this.findOne({ _id: id });

  if (!user) {
    throw new Error("Not authorized to update");
  }

  user.profile_picture = req.body.profile_picture;
  await user.save();

  console.log("user updated successfully");

  return updatedUser;
};

//static function to get profile picture
userSchema.statics.getProfilePic = async function (req) {
  console.log("---------In get profile picture function--------");
  const userId = req.params.id;
  const user = await this.findOne({ _id: userId });
  if (!user) {
    throw new Error("User not found");
  }
  return await user.profile_picture;
};

// static function to remove profile picture
userSchema.statics.removeProfilePic = async function (req) {
  console.log("---------In remove profile picture function--------\n");

  const userId = req.params.id;
  const user = await this.findOne({ _id: userId });

  // if user not found
  if (!user) {
    throw new Error("User not found");
  }

  // if no profile picture has been set yet
  if (user.profile_picture === "") {
    throw new Error("No profile picture has been set yet!");
  }

  // remove profile picture
  user.profile_picture = "";
  await user.save();
  return user;
};

// static function to delete user
userSchema.statics.deleteUser = async function (email) {
  console.log("---------In delete user function--------\n");

  const user = await this.findOne({ email });
  console.log(user);

  if (!user) {
    throw new Error("User not found");
  }

  // delete user
  await this.findOneAndDelete({ email });
  console.log("user deleted successfully");
  return user;
};

module.exports = mongoose.model("User", userSchema);
