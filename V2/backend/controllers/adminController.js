const admin = require("../models/admin");

const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signupAdmin = async (req, res) => {
  const { username, email, password } = req.body;
  admin.signup(username, email, password)
    .then((admin) => {
      const token = createToken(admin._id);
      res.status(201).json({
        email,
        token,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  admin.login(email, password)
    .then((admin) => {
      const token = createToken(admin._id);
      res.status(200).json({
        email,
        token,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const updateAdmin = async (req, res) => {
  const { email, password } = req.body;
  admin.update(email, password)
    .then((admin) => {
      res.status(200).json({
        admin,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const deleteAdmin = async (req, res) => {
  const { email } = req.body;
  admin.findOneAndDelete({ email })
    .then((admin) => {
      res.status(200).json({
        admin,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

module.exports = { signupAdmin, loginAdmin, updateAdmin, deleteAdmin };
