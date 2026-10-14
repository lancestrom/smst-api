const express = require("express");

const router = express.Router();

const bkkController = require("../controllers/bkk.controller");

router.get("/mitra", bkkController.getAllmitra);

router.get("/kegiatan", bkkController.getAllkegiatan);

router.get("/kegiatan/gambar", bkkController.getAllkegiatanGambar);

module.exports = router;
