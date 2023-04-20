const mongoose = require("mongoose");
const bcyrpt = require("bcrypt");
const validator = require("validator");

const adminSchema = new mongoose.Schema({

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

});

// signup function for admin
adminSchema.statics.signup = async function (req) {

  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  if (!username || !email || !password ) {
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

  const admin = await this.create({
    username,
    email,
    password: hash,
  });

  return admin;
};

// login function for admin
adminSchema.statics.login = async function (req) {
  
  var email = req.body.email;
  var password = req.body.password;

  if (!email || !password ) {
    throw new Error("Please fill all the fields");
  }

  const admin = await this.findOne({ email });

  if (! admin) {
    throw new Error("Email or password is incorrect");
  }

  const match = await bcyrpt.compare(password,  admin.password);

  if (!match) {
    throw new Error("Email or password is incorrect");
  }


  return admin;
};

//  update function for admin
adminSchema.statics.update = async function (req) {
  
  var email = req.body.email;
  var password = req.body.password;

  if (!email || !password) {
    throw new Error("Please fill all the fields");
  }
  const admin = await this.findOne({ email });

  if (! admin ) {
    throw new Error("Not authorized to update");
  }

  const salt = await bcyrpt.genSalt(10);
  const hash = await bcyrpt.hash(password, salt);
  user.password = hash; // update password
  await user.save();
  return user;
};


module.exports = mongoose.model("admin",adminSchema);
