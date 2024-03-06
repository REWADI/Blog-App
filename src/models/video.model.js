import mongoose, { Schema } from "mongoose";

const videoSchema =new Schema 
{
   videoFile = {
    type:String,
    required :true
   }
   thumbnail={
    type :String,
    required:true 
   },
   owner={
    type :String,
    required:true 
   },
   title={
    type :String,
    required:true 
   },
   description={
    type :String,
    required:true 
   },
   
   isPublished={
    type :Boolean,
    required:true 
   },
   watchHistory={
    type :Number,
    required:true 
   }
   
    
}


export const Video = mongoose.Schema(Video,videoSchema)