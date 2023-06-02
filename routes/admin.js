const expresss = require("express")
const router = expresss.Router()

const AdminController = require("../controllers/AdminController")

router.post("/signup", AdminController.signup)


module.exports = router;
// export default router;