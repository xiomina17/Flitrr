const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi= require('joi');
const passwordComplexity = require("joi-password-complexity");

const UsersSchema = new mongoose.Schema({

    fullName:{
        type: String,
        required:[true, "Full name is required"]
    },

    email:{
        type:String,
        required:[true, "Email is required"]
    },

    phoneNumber:{
        type:Number,
        required:[true, "Email is required"]
    },

    companyName:{
        type:String,
        // required:[true, "Company Name is required"]
    },

    password:{
        type:String,
        required:[true, "Password is required"]
    }, 
    
 }, {timestamps:true})



  const bcrypt = require('bcrypt');
// this should go after 
UsersSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});


 UsersSchema.methods.generateAuthToken = function() {
        const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY,{expiresIn: "7d"})
        return token 
 }
 
 
 const User = mongoose.model('User', UsersSchema);

 const validate= (data) => {
    const schema = Joi.object({
        fullName: Joi.string().required().label("Full name"),
        email: Joi.string().required().label("Email"),
        phoneNumber: Joi.number().required().label("Phone Number"),
        password:passwordComplexity().required().label("Password")



    });
    return schema.validate(data)
 }

 module.exports = {User, validate};