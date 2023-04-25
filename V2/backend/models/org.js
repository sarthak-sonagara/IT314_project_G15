const mongoose = require("mongoose");
const bcyrpt = require("bcrypt");
const validator = require("validator");

const Conference = require("./conference");

const orgSchema = new mongoose.Schema({
  orgname: {
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
  // add array of conferences to org schema
  conferences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conference",
      default: [],
    },
  ],

  accepted: {
    type: Boolean,
    default: false,
  },
});

// static signup function
orgSchema.statics.signup = async function (orgname, email, password) {
  console.log("orgname", orgname, "email", email, "password", password);

  // validation
  if (!orgname || !email || !password) {
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

  //   hasing and creating new organization
  const salt = await bcyrpt.genSalt(10);
  const hash = await bcyrpt.hash(password, salt);

  const org = await this.create({
    orgname,
    email,
    password: hash,
  });

  return org;
};

// static login function
orgSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw new Error("Please fill all the fields");
  }
  const org = await this.findOne({ email });

  //if organization's email does not exist, so first we have to sign up.
  if (!org) {
    throw new Error("Email or password is incorrect");
  }

  const match = await bcyrpt.compare(password, org.password);

  if (!match) {
    throw new Error("Email or password is incorrect");
  }

  return org;
};

// static function to get organization by id
orgSchema.statics.getOrgById = async function (id) {
  const org = await this.findOne({ _id: id });

  if (!org) {
    throw new Error("Organization does not exist");
  }

  return org;
}

// static update function
orgSchema.statics.update = async function (email, password) {
  // validation
  if (!email || !password) {
    throw new Error("Please fill all the fields");
  }

  const org = await this.findOne({ email });

  if (!org) {
    throw new Error("Not authorized to update");
  }

  const salt = await bcyrpt.genSalt(10);
  const hash = await bcyrpt.hash(password, salt);

  org.password = hash; // update password

  await org.save();
  return org;
};

// static function to get conferences of an organization
orgSchema.statics.myConferences = async function (id) {
  const org = await this.findOne({ _id: id }).populate("conferences");

  if (!org) {
    throw new Error("Organization does not exist");
  }

  return org.conferences;
}

module.exports = mongoose.model("Org", orgSchema);
