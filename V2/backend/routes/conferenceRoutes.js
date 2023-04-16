const express = require("express");

const conferenceController = require("../controllers/conferenceController.js");

const router = express.Router();

const {
  createConference,
  editConference,
  deleteConference,
  viewConference,
} = require("../controllers/conferenceController");

const requireAuth = require("../middlewares/requireAuth");

// fire middleware function before every other workout route
router.use(requireAuth);

// createConference route
router.post("/createConference", createConference);

router.get("/viewConference", viewConference);

router.put("/editConference/:id", editConference);

router.delete("/deleteConference/:id", deleteConference);

module.exports = router;
