const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");

cloudinary.config({
    cloud_name: "ddhi85adh",
    api_key: "153413529455451",
    api_secret: "tChmEuZu_-l5_4ki0NeRCqyn75E",
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "DEV",
    },
});

const upload = multer({ storage: storage });

module.exports = upload;