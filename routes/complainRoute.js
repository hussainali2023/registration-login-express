const express = require('express');
const router = express.Router();
const authComplainController = require("../controller/authComplainController")

router.post('/add-complain', authComplainController.addComplain);
router.post("/update/:id", authComplainController.updateComplain)


module.exports = router;
