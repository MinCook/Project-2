const  express = require ("express");
const router = express.Router();
const controller = require("../../controller/client/jobs.controller")

router.get("/",controller.jobs)



module.exports = router