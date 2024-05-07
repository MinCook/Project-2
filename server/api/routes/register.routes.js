const  express = require ("express");
const router = express.Router();
const controller = require("../../controller/client/register.controller")

router.post("/",controller.registerPost)
router.get("/",controller.checkName)



module.exports = router