const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

require("dotenv").config();

const storage = new GridFsStorage({
  url: process.env.URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-cakeimg-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "cakephotos",
      filename: filename,
    };
  },
});

const uploadFiles = multer({ storage: storage }).single("cake_photo");
const uploadFilesMiddleware = util.promisify(uploadFiles);

module.exports = uploadFilesMiddleware;
