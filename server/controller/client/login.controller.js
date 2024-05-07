const database= require("../../model/database.model");
// module.exports.checkLogin = async (req, res) => {
//       const userName = req.body.name;
//       const passWord = req.body.password;
//       const checkLogin = await database.register.findOne({
//         name:userName, 
//         password:passWord
//       })
//       if(checkLogin.length >0){
//         res.json(checkLogin)
//         res.cookie("token",checkLogin.token)
//       }
//   };
module.exports.getInfo = async (req, res) => {
      const userName = req.query.name;
      const passWord = req.query.password;
      const checkLogin = await database.register.findOne({
        name:userName, 
        password:passWord
      })
     if(checkLogin){
      res.cookie("token",checkLogin.token,{
        expires: new Date(Date.now() + 900000),
      })
      console.log("token",checkLogin.token)
      res.json(checkLogin)
     }
  };

