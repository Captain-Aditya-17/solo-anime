const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: [3, "firstname must be at least 3 characters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, "email must be at least 3 characters"],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "password must be at least 6 characters"],
  },
});

userSchema.statics.hashPassword = async(password)=>{
  return await bcrypt.hash(password,10);
}

userSchema.methods.isVaildPassword = async function(password){
  return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateToken = function(){
  return jwt.sign({email: this.email}, process.env.JWT_SECRET,{expiresIn: '24h'});
 
}

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;