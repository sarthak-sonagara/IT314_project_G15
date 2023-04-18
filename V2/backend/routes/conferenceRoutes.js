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
// router.use(requireAuth);

// createConference route
router.post("/create", createConference);

router.get("/get", viewConference);

router.patch("/edit/:name", editConference);

router.delete("/delete/:name", deleteConference);

module.exports = router;
