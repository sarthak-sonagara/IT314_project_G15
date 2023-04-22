const Conference = require("../models/conference");

const createConference = async (req, res) => {
  console.log(req.params);
  Conference.createConference(req)
    .then((conference) => {
      res.status(201).json({
        conference,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const editConference = async (req, res) => {
  Conference.editConference(req)
    .then((conference) => {
      res.status(200).json({
        conference,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const deleteConference = async (req, res) => {
  Conference.deleteConference(req)
    .then((conference) => {
      res.status(200).json({
        conference,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

const viewConference = async (req, res) => {
  console.log("in view conference contoller");
  Conference.viewConference(req)
    .then((conference) => {
      res.status(201).json({
        conference,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

module.exports = {
  createConference,
  editConference,
  deleteConference,
  viewConference,
};
