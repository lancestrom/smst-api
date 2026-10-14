const express = require("express");

const router = express.Router();

const sekolahController = require("../controllers/sekolah.controller");

router.get("/", sekolahController.getProfile);

router.get("/visi", sekolahController.getVisi);

router.get("/misi", sekolahController.getMisi);

router.get("/jurusan", sekolahController.getAlljurusan);


module.exports = router;
