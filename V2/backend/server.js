// config to dotenv
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const orgRoutes = require("./routes/orgRoutes");
const conferenceRoutes = require("./routes/conferenceRoutes");
const adminRoutes = require("./routes/adminRoutes");

const corsOptions = {
  origin: "*",
  successStatus: 200,
};

// express app
const app = express();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/auth/user", userRoutes);
app.use("/auth/org", orgRoutes);
app.use("/org", conferenceRoutes);
app.use("/auth/admin" , adminRoutes);

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    if (!module.parent) {
      app.listen(process.env.PORT, () => {
        console.log("connected to db & listening on port", process.env.PORT);
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
