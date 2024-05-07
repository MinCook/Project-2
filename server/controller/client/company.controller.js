const database= require("../../model/database.model");
module.exports.company = async (req, res) => {
  const companyDB = await database.company.find()
   res.json(companyDB)
  };
