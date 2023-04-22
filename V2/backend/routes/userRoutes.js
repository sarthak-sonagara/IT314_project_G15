const express = require("express");

const router = express.Router();

// controllers
const {
  loginUser,
  signupUser,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");

// all users routes
router.get("/", getAllUsers);

// signup route
router.post("/signup", signupUser);

// login route
router.post("/login", loginUser);

// update route
router.patch("/update", updateUser);

// delete route
router.delete("/delete", deleteUser);

module.exports = router;
