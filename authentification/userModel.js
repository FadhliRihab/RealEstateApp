const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
  
  firstName:String,
  lastName:String,
  email:{type:String,required:true},
  password:{type:String,required:true},
  activationCode:String,
 
  token:String
});

const collection = mongoose.model('collection', userSchema);

module.exports = collection;
