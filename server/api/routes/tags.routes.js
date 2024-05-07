const  express = require ("express");
const router = express.Router();
const controller = require("../../controller/client/tags.controller")


router.get("/",controller.tags);


module.exports = router