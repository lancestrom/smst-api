const express = require("express");

const router = express.Router();

const sekolahController = require("../controllers/sekolah.controller");

router.get("/", sekolahController.getProfile);

router.get("/visi", sekolahController.getVisi);

router.get("/misi", sekolahController.getMisi);

// router.put("/", sekolahController.updateProfile);

// router.get("/vision-mission", sekolahController.getVisionMission);

// router.put("/vision", sekolahController.updateVision);

// router.post("/missions", sekolahController.createMission);

// router.put("/missions/:id", sekolahController.updateMission);

// router.delete("/missions/:id", sekolahController.deleteMission);

module.exports = router;
