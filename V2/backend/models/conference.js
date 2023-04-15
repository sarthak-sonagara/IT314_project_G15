const mongoose = require("mongoose");

const validator = require("validator");

const org = require("./org");

const conferenceSchema = new mongoose.Schema({
    org: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true,
        // ref: "Org", // whatever object id we store must be from the Org model
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

// static function to create new conferences
conferenceSchema.statics.createConference = async function (req) {
    console.log("------In createConference function------\n", req.body);

    org_id = req.body.org;
    conferenceName = req.body.conferenceName;
    description = req.body.description;
    startDate = req.body.startDate;
    endDate = req.body.endDate;
    guestSpeakers = req.body.guestSpeakers;
    topics = req.body.topics;
    
    if (!org_id || !conferenceName || !description || !startDate || !endDate || !guestSpeakers || !topics) {
        throw new Error("Please fill all the required fields");
    }

    const conference = await this.create(req.body);

    return conference;
}

// static function to update any conferences
conferenceSchema.statics.editConference = async function (req) {
    console.log("------In editConference function------\n", req.body);

    const conferenceObjId = req.params.id;

    const filter = { _id: conferenceObjId };
    const exist = await this.findOne(filter);
    console.log(exist);
    
    // Conference does not exist then return error message.
    if (!exist) {
        throw new Error("Conference does not exist");
    }

    org_id = req.body.org;
    conferenceName = req.body.conferenceName;
    description = req.body.description;
    startDate = req.body.startDate;
    endDate = req.body.endDate;
    guestSpeakers = req.body.guestSpeakers;
    topics = req.body.topics;

    if (!org_id || !conferenceName || !description || !startDate || !endDate || !guestSpeakers || !topics) {
        throw new Error("Please fill all the required fields");
    }

    // this will return old conference document not updated one.
    let conference = await this.findOneAndUpdate(filter, req.body);

    // for returning updated conference document in response.
    conference = await this.findOneAndUpdate(filter, req.body);

    return conference;
}

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
}

// static function to search any conferences by name
conferenceSchema.statics.viewConference = async function (req) {
    console.log("------In viewConference function------\n", req.body);

    const conferenceName = req.body.conferenceName;

    if ( !conferenceName ) {
        throw new Error("Please Enter Name of a conference");
    }

    // this will return conference object.
    const conference =  await this.find({conferenceName});
    

    // Conference does not exist then return error message.
    if (!conference) {
        throw new Error("Search not found");
      }

    return conference;
}


module.exports = mongoose.model("Conference", conferenceSchema);
