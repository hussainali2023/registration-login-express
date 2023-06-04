const express = require('express');
const router = express.Router();
const authAdminController = require('../controller/authAdminController');
const authClientController = require("../controller/authClientController")

router.post('/signup', authAdminController.signup);
router.post('/login', authAdminController.login);
router.post("/create-client", authClientController.signup)

module.exports = router;
