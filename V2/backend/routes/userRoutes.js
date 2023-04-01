const express = require("express");

const router = express.Router();

// controllers
const { loginUser, signupUser } = require("../controllers/userController");

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

module.exports = router;
