const express = require("express");

const conferenceController = require("../controllers/conferenceController.js")

const router = express.Router();


const {
    createConference ,
    editConference ,
    deleteConference,
} = require("../controllers/conferenceController");

// createConference route
router.post("/createConference", createConference);

router.put("/editConference/:id",editConference);

router.delete( "/deleteConference/:id", deleteConference);

module.exports = router;