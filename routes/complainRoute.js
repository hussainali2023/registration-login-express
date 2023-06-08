const express = require('express');
const router = express.Router();
const authComplainController = require("../controller/authComplainController")

router.get("/all", authComplainController.getAllComplain)
router.get("/id/:_id", authComplainController.getComplainById)
router.post('/add-complain', authComplainController.addComplain);
router.post("/update/:_id", authComplainController.updateComplain)


module.exports = router;
