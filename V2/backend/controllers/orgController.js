const Org = require("../models/org");

const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const allOrgs = async (req, res) => {
  Org.find()
    .then((orgs) => {
      res.status(200).json({
        orgs,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const getOrgById = async (req, res) => {
  const emailId = req.params.emailid;
  Org.getOrgById(emailId)
    .then((org) => {
      res.status(200).json({
        org,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const myConferences = async (req, res) => {
  const id = req.params.id;
  Org.myConferences(id)
    .then((conferences) => {
      res.status(200).json({
        conferences,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));

};

const signupOrg = async (req, res) => {
  const { orgname, email, password } = req.body;
  Org.signup(orgname, email, password)
    .then((org) => {
      const token = createToken(org._id);
      res.status(201).json({
        email,
        token,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const loginOrg = async (req, res) => {
  const { email, password } = req.body;
  Org.login(email, password)
    .then((org) => {
      const token = createToken(org._id);
      res.status(200).json({
        email,
        token,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const updateOrg = async (req, res) => {
  const { email, password } = req.body;
  Org.update(email, password)
    .then((org) => {
      res.status(200).json({
        org,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const deleteOrg = async (req, res) => {
  const { email } = req.body;
  Org.findOneAndDelete({ email })
    .then((org) => {
      res.status(200).json({
        org,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

// update org accepted status
const updateOrgAcceptedStatus = async (req, res) => {
  const { email } = req.body;
  Org.findOne({ email })
    .then((org) => {
      org.accepted = !org.accepted;
      org.save();
      res.status(200).json({
        org,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

module.exports = {
  signupOrg,
  loginOrg,
  updateOrg,
  deleteOrg,
  allOrgs,
  getOrgById,
  updateOrgAcceptedStatus,
  myConferences,
};
