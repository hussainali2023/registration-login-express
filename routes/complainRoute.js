const express = require('express');
const router = express.Router();
const authComplainController = require("../controller/authComplainController")

router.post('/add-complain', authComplainController.addComplain);
router.post("/update/:_id", authComplainController.updateComplain)
router.get("/all", authComplainController.getAllComplain)
router.get("/id/:_id", authComplainController.getComplainById)


module.exports = router;
