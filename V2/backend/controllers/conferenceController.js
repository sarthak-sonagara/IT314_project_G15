const Conferencedb = require("../models/conference");

module.exports = {

    // create new conference
    createConference: async function (req, res) {
        console.log("------In createConference function------\n", req.body);
        await Conferencedb
            .create(req.body)
            .then(dbModel => res.status(200).json(dbModel))
            .catch((error) => res.status(400).json(error))
    },

    // Edit already created conference
    editConference: async function (req, res) {

        console.log("------In editConference function------\n", req.body);

        // ** we must get _id from paramters (but temporarily passed in request body) **
        const filter = { _id: req.body._id };

        //if we don't need updated document in response(faster than findOneAndUpdate)
        Conferencedb.updateOne(filter, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));

        // await Conferencedb.findOneAndUpdate(filter, req.body)
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err));
    },

    // Delete Conference
    deleteConference: async function (req, res) {

        console.log("------In deleteConference function------\n", req.body);

        const filter = { _id: req.body._id };

        // Does not return deleted document in response so faster than findOneAndDelete
        await Conferencedb
            .deleteOne(filter)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));

        // await Conferencedb
        //     .findOneAndDelete(filter)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.json(err));
    }
}