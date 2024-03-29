const  jwt  = require("jsonwebtoken");
const  collection = require("../userModel");

exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    if (!token){
      return res.status(400).send("you are not auth");
    }else {
      const decode = jwt.verify(token,process.env.secretKey);
    if (!decode) {
      res.status(400).send("you are not auth");
    }else {
      const user = await collection.findById(decode.id);
    req.user = user;

    next();
    }
    
    }
  }
     catch (error) {
    console.log(error);
  }
};