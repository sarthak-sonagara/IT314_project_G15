const mongoose = require("mongoose");

const conferenceSchema = new mongoose.Schema({
    org_id: {
        type:ObjectId,
        required: true,
    },
    start_date_time: {
        type: Date,
        required: true,
    },

    end_date_time: {
        type: Date,
        required: true,
    },

    description: {
        type: String,
        required: false,
    },

    guest_speakers: {
        type: [String],
        required: true,  
    },

    topic: {
        type: [String],
        required: true,
    }
});