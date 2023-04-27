const fs = require("fs");

const { google } = require("googleapis");
const { JWT } = require("google-auth-library");
const User = require("../models/user");

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

const uploadPaper = async (req, res) => {
  const { email, confid } = req.query;
  console.log(email, confid);
  const auth = authenticateGoogle();
  const response = await uploadToGoogleDrive(req.file, auth);
  deleteFile(req.file.path);
  const user = await User.findOne({ email });
  user.papers.push({
    title: req.body.originalname,
    fileUrl: response.data.id,
    conference: confid,
  });
  console.log(response.data.id);
  await user.save();

  res.status(200).json({ response });
};

const getPaper = async (req, res) => {
  console.log("get paper");
  let downloadUrl = "";
  drive.files.get(
    {
      fileId: "1590nRXUmOoerl4hdy2aGCfGekni9BWbo",
      fields: "id,name,webContentLink",
    },
    (err, resp) => {
      if (err) throw new Error("Error retrieving file metadata");

      const { id, name, webContentLink } = resp.data;
      console.log(`Retrieved file metadata for ${name} with ID ${id}`);

      // Send a GET request to the file's download URL to download the file
      downloadUrl = webContentLink.replace(/\/view\?usp=sharing$/, "");

      console.log(downloadUrl);
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${client.credentials.access_token}`,
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
      };
      res.json({ downloadUrl, options });
    }
  );
};

module.exports = { uploadPaper, getPaper };
