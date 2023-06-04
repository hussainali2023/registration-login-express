const express = require('express');
const router = express.Router();

const authClientController = require("../controller/authClientController")


router.post("/login", authClientController.login)

module.exports = router;
