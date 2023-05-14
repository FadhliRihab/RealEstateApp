const express =require("express")
const { isAuth } = require("./middleWare/isAuth");
const { getUser}=require("./users") ;


const routers = express.Router();

/* READ */
routers.get("/currentt", isAuth, getUser);




module.exports=routers;