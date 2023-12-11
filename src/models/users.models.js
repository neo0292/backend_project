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
     required: true,
    },
    avatar:
    {
      type: String,
      required: true,
    },
    coverImage:
    {
      type: String,
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

export const Users = mongoose.model('Users', userSchema);