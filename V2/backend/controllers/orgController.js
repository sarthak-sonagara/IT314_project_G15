const Org = require("../models/org");

const jwt = require("jsonwebtoken");

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
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
                role,
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

module.exports = { signupOrg, loginOrg, updateOrg, deleteOrg };
