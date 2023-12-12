import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: 
    { 
     type: String,
     required: true,
     unique: true,
     lowercase: true,
     index : true,
    },
    email: 
    { 
     type: String,
     required: true,
     unique: true,
     lowercase: true,
    },
    fullName: 
    { 
     type: String,
     required: true,
     index : true,
    },
    password: 
    { 
     type: String,
     required: [true, 'password is required'],
    },
    avatar:
    {
      type: String, //cloudinary url
      required: true,
    },
    coverImage:
    {
      type: String, //cloudinary url
      required: true,
    },
    refreshToken:{
      type: String,
      required: true,
    },
    watchHistory:{
      type: Schema.Types.ObjectId,
      ref: 'Video'
    }
  }, {timestamps: true});

  //use pre hook to encrypt password just before saving in db
userSchema.pre('save', async function (next) {
  if(!this.isModified('password')) return next();
  
  this.password = bcrypt.hash(this.password,10)
  next();
})

// custom method to verify password
userSchema.methods.isPasswordCorrect = async function (password){
  return await bcrypt.compare(password,this.password)
}

// custom method to generate AccessToken
userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
    {//data
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName
    },
    //secret
    process.env.ACCESS_TOKEN_SECRET,
    {
      //expiry
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

//custom method to generate refreshToken
userSchema.methods.generatRefreshToken = function (){
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}



export const User = mongoose.model('User', userSchema);