const database= require("../../model/database.model");
module.exports.registerPost = async (req, res) => {
    try {
        const data = await new database.register(req.body).save()
    } catch (error) {
      res.json({
        code:400,
        massage:"Lỗi"
      })
    }
  };
module.exports.checkName = async (req, res) => {
    if(req.query){
        const name = req.query.name || "";
        const checkName = await database.register.find({
            name:name,
        })
       
        res.json(checkName)
    }
    else{
        const accountDB = await database.register.find()
        res.json(accountDB)
    }
  };
