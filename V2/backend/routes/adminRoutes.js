const express = require("express");

const router = express.Router();

// controllers
const {
  loginAdmin,
  signupAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/adminController");

// signup route
router.post("/signup", signupAdmin);

// login route
router.post("/login", loginAdmin);

// update route
router.patch("/update", updateAdmin);

// delete route
router.delete("/delete", deleteAdmin);

module.exports = router;
