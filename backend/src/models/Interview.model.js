// This stores one complete interview session
import mongoose from "mongoose"

const quesAnsSchema=new mongoose.Schema({
    questionNumber:{
        type:Number,
        required:true,
        min:1,
        max:5,
    },
    question:{
        type:String,
        required:true,


    },
    answerText:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        min:1,
        max:10
    },
    feedback:{
        type:String,
    },
    
},{_id:false});

const interviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    sessionId:{
        type:String,
        unique:true,
        sparse:true,
    },
    rollType:{
        type:String,
        required:true,

    },
    experienceLevel:{
        type:String,
        required:true,
    },
    interviewType:{
        type:String,
        required:true
    },
    questionsAnswers:[quesAnsSchema],

    overallScore:{
        type:Number,
        min:1,
        max:100
    },
    rating:{
        type:String,
        enum:["Excellent", "Good", "Average", "Poor"],
    },

    technicalSkills:{
        type:Number,
        min:1,
        max:10
    },
    communicationSkills:{
        type:Number,
        min:1,
        max:10,
    },

    //overall assesment result 
    strengths:[String],
    weakness:[String],
    recommendation:{
        type:String,
    },
    summary:{
        type:String,
    },
    //interview Status
    status:{
        type:String,
        enum:["in-progress","completed"],
        default:"in-progress",
    },

    startTime:{
        type:Date,
        default:Date.now(),
    },
    endTime:{
        type:Date,
    },
   },
   {
    timestamps:true,
   }
);

// index for the faster Queries
interviewSchema.index({user:1,createdAt:-1});
interviewSchema.index({sessionId:1});
interviewSchema.index({status:1});


const Interview=mongoose.model("Interview",interviewSchema);
export default Interview;