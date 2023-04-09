const mongoose = require("mongoose");

const conferenceSchema = new mongoose.Schema({
    org_id: {
        // type:ObjectId,
        type: String,
        required: true,
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

    topic: {
        type: [String],
        required: true,
    }
});

const Conference = mongoose.model("Conference", conferenceSchema);

module.exports = Conference;

