const mongoose = require("mongoose");
const CompanySchema = new mongoose.Schema({
  companyName: String,
  phone: String,
});
const company = mongoose.model("company", CompanySchema, "company");

const CitySchema = new mongoose.Schema({});
const city = mongoose.model("city", CitySchema, "city");

const CvSchema = new mongoose.Schema({
  name:String,
  phone:Number,
  email:String,
  facebook:String,
  address:String,
  position:String,
  target:String,
});
const cv = mongoose.model("cv", CvSchema, "cv");

const TagsSchema = new mongoose.Schema({});
const tags = mongoose.model("tags", TagsSchema, "tags");

const JobSchema = new mongoose.Schema({});
const jobs = mongoose.model("jobs", JobSchema, "jobs");


const registerSchema = new mongoose.Schema({
  name:String,
  password:String,
  token:String,
});
const register = mongoose.model("register", registerSchema, "register");


module.exports = { company, city, cv, tags, jobs,register };


