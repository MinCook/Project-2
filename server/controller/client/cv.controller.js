const database= require("../../model/database.model");
module.exports.cv = async (req, res) => {
      const cvDB = await database.cv.find()
      res.json(cvDB)
  };
module.exports.createCV = async (req, res) => {
  try {
      const data = await new database.cv(req.body).save()
  } catch (error) {
    res.json({
      code:400,
      massage:"Lỗi"
    })
  }
  };
