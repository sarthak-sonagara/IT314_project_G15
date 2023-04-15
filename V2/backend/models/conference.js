const mongoose = require("mongoose");

const conferenceSchema = new mongoose.Schema({
  org: {
    type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
    ref: "Org", // whatever object id we store must be from the Org model
  },

  conferenceName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },

  startDate: {
    type: String,
    required: true,
  },

  endDate: {
    type: String,
    required: true,
  },

  guestSpeakers: {
    type: [String],
    required: true,
  },

  topics: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Conference", conferenceSchema);
