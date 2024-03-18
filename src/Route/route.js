const express = require("express");
const router = express.Router();
const PlantController = require("../Controller/controller");

router.post("/create", PlantController.createPlant);
router.get("/getAllPlant", PlantController.getPlant);
router.post("/createShift", PlantController.createshift);
router.get("/getAllShift", PlantController.getshift);

module.exports = router
