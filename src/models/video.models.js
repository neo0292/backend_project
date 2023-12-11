import mongoose, { Schema } from 'mongoose';

const videoschema = new Schema(
  { 
    videoFile:
    {
      type: String,     //cloudinary
      required: true,
    },
    thumbnail:
    {
      type: String,     //cloudinary
      required: true,
    },
    owner:
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title:
    {
      type: String,
      required: true,
    },
    description:
    {
      type: String,
      required: true,
    },
    duration:
    {
      type: Number, //cloudinary
      required: true,
    },
    views: 
    {
      type: Number,
      default: 0,
    },
    isPublished:
    {
      type: Boolean,
      default: true,
    }

  },
  {
    timeseries:true
  });

export const Video = mongoose.model('Video',videoSchema);