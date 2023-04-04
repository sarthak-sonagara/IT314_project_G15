const express = require("express");

const router = express.Router();

// controllers
const {
    loginOrg,
    signupOrg,
    updateOrg,
    deleteOrg,
} = require("../controllers/orgController");

// signup route
router.post("/signup", signupOrg);

// login route
router.post("/login", loginOrg);

// update route
router.patch("/update", updateOrg);

// delete route
router.delete("/delete", deleteOrg);

module.exports = router;
