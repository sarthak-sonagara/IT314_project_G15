const express = require("express");
const conferenceController = require("../controllers/conferenceController.js")
const router = express.Router();

router.route("/createConference").post(conferenceController.createConference);


module.exports = router;