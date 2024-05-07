const express= require("express");
const app = express();
const db = require("./config/database.js");    
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require("dotenv").config() 
const port = process.env.PORT;
const cors = require("cors");
db.connect()
app.use(cors());
app.use(bodyParser.json())
app.use(cookieParser());
const routesApi = require("./api/routes/index.routes.js")
routesApi(app);
app.listen(port,()=>{
    console.log("ĐANG LẮNG NGHE")
});