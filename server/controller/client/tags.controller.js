const database= require("../../model/database.model");
module.exports.tags = async (req, res) => {
    const tagsDB = await database.tags.find()
    res.json(tagsDB)
  };
