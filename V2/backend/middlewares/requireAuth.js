const jwt = require("jsonwebtoken");

const User = require("../models/user");

const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.SECRET_KEY, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in." });
    }
    const { _id } = payload;
    req.user = await User.findOne({ _id }).select("_id"); // adding req.user to the request object
    await next();
  });
};

module.exports = requireAuth;
