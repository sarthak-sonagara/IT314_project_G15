const express = require("express");
const conferenceController = require("../controllers/conferenceController.js")
const router = express.Router();

router.route("/createConference").post(conferenceController.createConference);

router.route("/editConference").put(conferenceController.editConference);

router.route("/deleteConference").delete(conferenceController.deleteConference);

module.exports = router;