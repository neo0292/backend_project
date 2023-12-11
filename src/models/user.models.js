import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: 
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

export const User = mongoose.model('User', userSchema);