// This stores one complete interview session
import mongoose  from "mongoose";
const interviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    roleType:{
        type:String,
        required:true,
    },
    question:{
        type:String,
        required:true,
    },
    answerText:{
        type:String,
    },
    score:{
        type:Number,
    },
    feedback:{
        type:String,
    },
    strengths:{
        type:String,
    },
    improvements:{
        type:String,
    },
},
{
    timestamps:true

});
const Interview=mongoose.model("Interview",interviewSchema);
export default Interview;