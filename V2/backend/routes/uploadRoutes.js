const express = require("express");
const router = express.Router();
const Multer = require("multer");

const { uploadPaper } = require("../controllers/uploadController");

const multer = Multer({
  storage: Multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `${__dirname}/../papers`);
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

router.use(multer.single("paper"));

router.post("/paper", uploadPaper);

module.exports = router;
