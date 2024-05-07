const  express = require ("express");
const router = express.Router();
const controller = require("../../controller/client/login.controller")

// router.post("/",controller.checkLogin)
router.get("/",controller.getInfo)



module.exports = router