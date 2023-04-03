const mongoose = require("mongoose");
const bcyrpt = require("bcrypt");
const validator = require("validator");

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
    enum: ["attendee", "admin"], // enum is an array of strings
    default: "attendee",
  },
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

module.exports = mongoose.model("User", userSchema);
