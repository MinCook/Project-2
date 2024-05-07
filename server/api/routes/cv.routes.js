const  express = require ("express");
const router = express.Router();
const controller = require("../../controller/client/cv.controller")


router.get("/",controller.cv);
router.post("/",controller.createCV);


module.exports = router