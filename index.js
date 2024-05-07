const express = require('express');
const database =require("./config/database");
require('dotenv').config()
const app = express();
// const port =process.env.PORT || 4000; 
const port =4000; 

 



database.connect();
app.listen(port,()=>{
    console.log('Hello');
})