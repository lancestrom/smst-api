const multer = require("multer");
const path = require("path");
const fs = require("fs");

const createStorage = (folder) => {
  const destination = `uploads/${folder}`;

  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, {
      recursive: true,
    });
  }

  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destination);
    },

    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();

      const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;

      cb(null, filename);
    },
  });
};

const imageFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("File harus JPG, JPEG, PNG atau WEBP"));
  }
};

/*
|--------------------------------------------------------------------------
| Teacher Upload
|--------------------------------------------------------------------------
*/

const teacherUpload = multer({
  storage: createStorage("teachers"),

  fileFilter: imageFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const heroUpload = multer({
  storage: createStorage("hero"),

  fileFilter: imageFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

/*
|--------------------------------------------------------------------------
| Post Upload
|--------------------------------------------------------------------------
*/

const postUpload = multer({
  storage: createStorage("posts"),

  fileFilter: imageFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = {
  heroUpload,

  teacherUpload,

  postUpload,
};
