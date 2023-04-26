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

const updateUser = async (req, res) => {
  const { email, password } = req.body;
  User.update(email, password)
    .then((user) => {
      res.status(200).json({
        user,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const updateUserProfile = async (req, res) => {
  const id = req.params.id;

  User.updateUserProfile(req)
    .then((user) => {
      res.status(200).json({
        user,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  User.getUserById(id)
    .then((user) => {
      res.status(200).json({
        user,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const getAllUsers = async (req, res) => {
  User.getAllUsers()
    .then((users) => {
      res.status(200).json({
        users,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const deleteUser = async (req, res) => {
  const { email } = req.body;
  User.findOneAndDelete({ email })
    .then((user) => {
      res.status(200).json({
        user,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const uploadProfilePicture = async (req, res) => {
  User.uploadProfilePicture(req)
    .then((users) => {
      res.status(200).json({
        users,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const getProfilePic = async (req, res) => {
  User.getProfilePic(req)
    .then((profile_picture) => {
      res.status(200).json({
        profile_picture,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const removeProfilePic = async (req, res) => {
  User.removeProfilePic(req)
    .then((user) => {
      res.status(200).json({
        user,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const uploadPaper = async (req, res) => {
  const { title, conferenceId } = req.body;
  console.log(req);
  // const { filename } = req.file;

  // const paper = {
  //   title,
  //   fileUrl: `http://localhost:3000/uploads/${filename}`,
  //   conference: conferenceId,
  // };

  // const publisher = await User.findById(req.user.id);

  // if (!publisher) {
  //   return res.status(404).json({ error: "Publisher not found" });
  // }

  // // add paper to publisher
  // publisher.papers.push(paper);
  // await publisher.save();
  // res.status(200).json({ publisher });
};

module.exports = {
  signupUser,
  loginUser,
  updateUser,
  updateUserProfile,
  getUserById,
  getAllUsers,
  deleteUser,
  uploadProfilePicture,
  getProfilePic,
  removeProfilePic,
  uploadPaper,
};
