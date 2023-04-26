const express = require("express");

const conferenceController = require("../controllers/conferenceController.js");

const router = express.Router();

const {
  createConference,
  getAllConferences,
  getConferenceById,
  editConference,
  deleteConference,
  conferenceRegistration,
  cancelRegistration,
  viewConference,
  removeUserFromConferences,   // call when user is deleted
  removeConferencesOfOrg, // call when org is deleted
} = require("../controllers/conferenceController");

const requireAuth = require("../middlewares/requireAuth");

// fire middleware function before every other workout route
// router.use(requireAuth);

// createConference route
router.post("/create", createConference);

//Get all conferences
router.get("/all", getAllConferences);

//Get information of conference by id
router.get("/:id", getConferenceById);

//conference registration route
router.patch("/register/:id", conferenceRegistration);

//conference cancel registration route
router.patch("/cancelRegistration/:id", cancelRegistration);

router.get("/get", viewConference);

router.patch("/edit", editConference);

router.delete("/delete/:id", deleteConference);

router.patch("/removeUser", removeUserFromConferences);

router.delete("/remove-conferences-of-Org",removeConferencesOfOrg);

module.exports = router;
