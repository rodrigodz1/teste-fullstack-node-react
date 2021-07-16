var express = require('express')
const router = express.Router()
const vehicleController = require("../controllers/vehicleController")

router.post("/", vehicleController.CreateVehicle)
router.get("/", vehicleController.getAllVehicles)
router.get("/find", vehicleController.getOneVehicle)

module.exports = router;