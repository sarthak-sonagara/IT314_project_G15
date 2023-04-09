const Conferencedb = require("../models/conference");

module.exports = {

    // create new conference
    createConference: function (req, res) {
        console.log("------In conferenceCreate function------\n", req.body);
        Conferencedb
            .create(req.body)
            .then(dbModel => res.status(200).json(dbModel))
            .catch((error) => res.status(400).json(error))
    }

}