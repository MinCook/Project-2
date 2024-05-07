const  express = require ("express");
const router = express.Router();
const controller = require("../../controller/client/company.controller")


router.get("/",controller.company);

module.exports = router