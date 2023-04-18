const mongoose = require("mongoose");

const Org = require("./org");

const conferenceSchema = new mongoose.Schema({
  org_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Org", // whatever object id we store must be from the Org model
  },

  conferenceName: {
    type: String,
    unique: true,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },

  guestSpeakers: {
    type: [String],
    default: [],
  },

  topics: {
    type: [String],
    default: [],
  },
});

// static function to create new conferences
conferenceSchema.statics.createConference = async function (req) {
  const {
    org_id,
    conferenceName,
    description,
    startDate,
    endDate,
    guestSpeakers,
    topics,
  } = req.body;

  if (!conferenceName || !description || !startDate || !endDate) {
    throw new Error("Please fill all the required fields");
  }

  const org = await Org.findOne({ _id: org_id });

  if (!org) {
    throw new Error("Organization does not exist");
  }

  const conference = await this.create({
    org_id,
    conferenceName,
    description,
    startDate,
    endDate,
    guestSpeakers,
    topics,
  });

  org.conferences.push(conference._id);
  await org.save();

  return conference;
};

// static function to update any conferences
conferenceSchema.statics.editConference = async function (req) {
  const name = req.params.name;

  // validation
  const { org_id, conferenceName, description, startDate, endDate } = req.body;

  if (!org_id || !conferenceName || !description || !startDate || !endDate) {
    throw new Error("Please fill all the required fields");
  }

  // this will return old conference document not updated one.
  const conference = await this.findOneAndUpdate(
    { conferenceName: name },
    req.body
  );

  return conference;
};

// static function to delete any conferences
conferenceSchema.statics.deleteConference = async function (req) {
  console.log("------In deleteConference function------\n", req.body);

  const conferenceObjId = req.params.id;

  const filter = { _id: conferenceObjId };
  const exist = await this.findOne(filter);
  console.log(exist);

  // Conference does not exist then return error message.
  if (!exist) {
    throw new Error("Conference does not exist");
  }

  const conference = await this.findOneAndDelete(filter);

  return conference;
};

// static function to search any conferences by name
conferenceSchema.statics.viewConference = async function (req) {
  console.log("------In viewConference function------\n", req.body);

  const conferenceName = req.body.conferenceName;

  if (!conferenceName) {
    throw new Error("Please Enter Name of a conference");
  }

  // this will return conference object.
  const conference = await this.find({ conferenceName });

  // Conference does not exist then return error message.
  if (!conference) {
    throw new Error("Search not found");
  }

  return conference;
};

module.exports = mongoose.model("Conference", conferenceSchema);
