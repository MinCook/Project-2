const mongoose = require("mongoose");
require("dotenv").config() 
module.exports.connect = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Kết nối thành công")
    } catch (error) {
        console.log("Không thành công")
    }
}