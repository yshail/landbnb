require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary"); // Change 1: Added { }

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({ // Change 2: Added 'new'
  cloudinary: cloudinary,
  params: {
    folder: "Landbnb",
    allowedFormats: ["png", "jpg", "jpeg"], // corrected property name is allowedFormats
  },
});

module.exports = {
  storage,
  cloudinary
};