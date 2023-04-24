const mongoose = require("mongoose");

const Org = require("./org");

const User = require("./user");

const conferenceSchema = new mongoose.Schema({
  org_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Org", // whatever object id we store must be from the Org model
  },

  conferenceName: {
    type: String,
    unique: false,
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

  registeredAttendees: [
    {
      type: mongoose.Schema.Types.ObjectId, // type must be object ids
      ref: "User", // whatever object id we store must be from the User model
      default: [],
    }
  ],

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

// static function to get all conferences
conferenceSchema.statics.getAllConferences = async function () {
  const conferences = await this.find({});
  return conferences;
};

//static function to get a conference by id
conferenceSchema.statics.getConferenceById = async function (id) {

  const filter = { _id: id }; // filter to find the conference

  const conference = await this.findOne(filter); // this will return conference object.

  if (!conference) {
    throw new Error("Conference does not exist");
  }

  return conference;
}

// static function to update any conferences
conferenceSchema.statics.editConference = async function (req) {

  console.log("------In editConference function------\n", req.body);
  const id = req.params.id;
  const filter = { _id: id }; // filter to find the conference

  // validation
  const { org_id, conferenceName, description, startDate, endDate } = req.body;

  if (!org_id || !conferenceName || !description || !startDate || !endDate) {
    throw new Error("Please fill all the required fields");
  }

  // this will return old conference document not updated one.
  const conference = await this.findOneAndUpdate(
    filter,
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

//static function to registration for a conference
conferenceSchema.statics.conferenceRegistration = async function (req) {
  console.log("------In conferenceRegistration function------\n", req.body);

  const conferenceObjId = req.params.id;
  //get object id of the user
  const userId = req.body.userId;
  console.log(userId, " ", conferenceObjId);

  //add the user to the conference's registeredAttendees array 
  const filter = { _id: conferenceObjId };

  const conference = await this.findOne(filter);
  if (!conference) {
    throw new Error("Conference does not exist");
  }

  //check if the conference has already ended
  const currDate = Date.now();
  if (conference.endDate < currDate) {
    throw new Error("Conference has already ended");
  }

  //check if the user is already registered for the conference
  if (conference.registeredAttendees.includes(userId)) {
    throw new Error("you already registered for this conference");
  }

  conference.registeredAttendees.push(userId);
  await conference.save();

  console.log("hello");
  //add the conference to the user's conferences array
  const user = await User.findOne({ _id: userId });
  user.registered_conferences.push(conferenceObjId);
  await user.save();

  return conference;
};

// static function to search any conferences by name of conference or topic
conferenceSchema.statics.viewConference = async function (req) {
  console.log("------In viewConference function------\n", req.body);

  const conferenceName = req.body.conferenceName;
  const topicName = req.body.topicName;

  if (conferenceName) {
    // this will return conference object.
    const conference = await this.find({ conferenceName });

    if (conference) {
      return conference;
    }
  }

  if (topicName) {
    // this will return conference object.
    var conferences = [];
    conferences = await this.find({
      topics: {
        $all: [topicName],
      },
    }).sort(({ startDate: 1 }));

    //Conference does not exist then return error message.
    if (!conferences) {
      throw new Error("Search not found");
    }
    return conferences;
  }

  throw new Error("Please Enter Name of a conference");
  //const find({EmployeeDetails:{$elemMatch:{EmployeePerformanceArea : "C++", Year : 1998}}}).pretty();
};

module.exports = mongoose.model("Conference", conferenceSchema);
