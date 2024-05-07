const database= require("../../model/database.model");
module.exports.city = async (req, res) => {
    const cityDB = await database.city.find({value:"Hà Nội"})
    res.json(cityDB)
  };
