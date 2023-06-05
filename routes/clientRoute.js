const express = require('express');
const router = express.Router();

const authClientController = require("../controller/authClientController")


router.post("/login", authClientController.login)
router.get("/",authClientController.getAllClient )
router.get("/email/:email", authClientController.getClientByEmail)
router.get("/id/:_id", authClientController.getClientById)

module.exports = router;
