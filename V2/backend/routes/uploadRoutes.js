const express = require("express");
const router = express.Router();
const Multer = require("multer");

const { uploadPaper, getPaper } = require("../controllers/uploadController");

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

router.get("/paper", getPaper);

// router.use(multer.single("file"));

router.post("/paper", multer.single("file"), uploadPaper);

module.exports = router;
