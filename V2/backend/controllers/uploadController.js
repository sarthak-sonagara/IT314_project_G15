const fs = require("fs");

const { google } = require("googleapis");
const { JWT } = require("google-auth-library");

// authenticate with google
const authenticateGoogle = () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "../key-file.json",
    scopes: "https://www.googleapis.com/auth/drive",
  });
  return auth;
};

const keyFile = require("../key-file.json");
const client = new JWT({
  email: keyFile.client_email,
  key: keyFile.private_key,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({
  version: "v3",
  auth: authenticateGoogle(),
});

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

  const response = await drive.files.create({
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

const uploadPaper = async (req, res) => {};

module.exports = { uploadPaper };
