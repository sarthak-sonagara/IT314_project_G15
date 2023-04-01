const User = require("../models/user");

const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signupUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  User.signup(username, email, password, role)
    .then((user) => {
      const token = createToken(user._id);
      res.status(201).json({
        email,
        role,
        token,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const loginUser = async (req, res) => {
  const { email, password, role } = req.body;
  User.login(email, password, role)
    .then((user) => {
      const token = createToken(user._id);
      res.status(200).json({
        email,
        role,
        token,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

module.exports = { signupUser, loginUser };
