const express = require('express')
const router = express.Router()

const ClientController = require("../controllers/ClientController")

router.get("/", ClientController.index)
router.post("/show", ClientController.show)
router.post("/store", ClientController.store)
router.post("/update", ClientController.update)
router.post("/delete", ClientController.destroy)

module.exports=router