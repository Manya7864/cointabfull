const  mongoose = require("mongoose");

const userschema = mongoose.Schema({
  gender: String,
  email: String,
  phone:String,
  name: {
    title: String,
    first: String,
    last: String,
  },
  dob: {
    date: String,
    age: Number
 },
  
});

const usermodel = mongoose.model("user", userschema);

module.exports =  usermodel ;
