// config to dotenv
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

const { google } = require("googleapis");
const Multer = require("multer");

const userRoutes = require("./routes/userRoutes");
const orgRoutes = require("./routes/orgRoutes");
const conferenceRoutes = require("./routes/conferenceRoutes");
const User = require("./models/user");

const corsOptions = {
  origin: "*",
  successStatus: 200,
};

// express app
const app = express();

const multer = Multer({
  storage: Multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `${__dirname}/papers`);
    },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "_" + Date.now() + "_" + file.originalname
      );
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

// authenticate with google
const authenticateGoogle = () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./key-file.json",
    scopes: "https://www.googleapis.com/auth/drive",
  });
  return auth;
};

// upload to google drive
const uploadToGoogleDrive = async (file, auth) => {
  const fileMetadata = {
    name: file.originalname,
    parents: ["1ADFpHcBEnWz632M913g__xy8nuDO4fkz"], // Change it according to your desired parent folder id
  };

  const media = {
    mimeType: file.mimetype,
    body: fs.createReadStream(file.path),
  };

  const driveService = google.drive({ version: "v3", auth });

  const response = await driveService.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: "id",
  });
  return response;
};

const deleteFile = (filePath) => {
  fs.unlink(filePath, () => {
    console.log("file deleted");
  });
};

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

app.post("/upload/:email", multer.single("file"), async (req, res) => {
  const { email } = req.params;
  console.log("body", req.file, email);
  const auth = authenticateGoogle();
  const response = await uploadToGoogleDrive(req.file, auth);
  console.log(response);
  deleteFile(req.file.path);
  const user = await User.findOne({ email });
  user.papers.push({
    title: req.body.originalname,
    fileUrl: response.data.id,
  });
  await user.save();

  const paper = await google
    .drive({ version: "v3", auth })
    .files.list(response.data.id);
  console.log(paper);
  res.status(200).json({ response });
});

app.get("/files", async (req, res) => {
  const auth = authenticateGoogle();
  const response = await google.drive({ version: "v3", auth }).files.get({
    fileId: "1JSDRS574wh_fs59w7xN912VQ1riB9Fbg",
    alt: "media",
  });
  // return response;
  res.status(200).json({ response });
});

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
