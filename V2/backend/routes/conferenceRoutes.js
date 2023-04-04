const express = require("express");

const router = express.Router();

const {
    viewConference,
    createConference,
    editConference,
    deleteConference,
} = require("../controllers/conferenceController");

// GET Route
router.get("/viewConference", viewConference);

//POST Route
router.post("/createConference", createConference);

//PUT Route
router.put("/editConference", editConference);

//DELETE Route
router.delete("/deleteConference" , deleteConference);