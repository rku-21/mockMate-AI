import {GoogleGenerativeAI} from "@google/generative-ai"
const genAI=GoogleGenerativeAI(process.env.GEMINI_API_KEY);
import Interview from "../models/Interview.model";

const interviewSessions=new Map();
const generateSessionId=()=>{
    return `session_${Date.now()}_${Math.random().toString(36).substr(2,9)}`
};

const generateQuestion=async(role, experienceLevel, interviewType, questionNumber, conversationHistory)=>{
    try{
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const prompt = `You are an expert technical interviewer. Generate a ${interviewType} interview question for a ${role} position with ${experienceLevel} experience level. This is question number ${questionNumber} out of 5.
        
        The question should be:
        - Relevant to the role
        - Appropriate for the experience level
        - Clear and concise
        - 2-3 sentences maximum
        
        Previous conversation:\\n${conversationHistory.map(msg => `${msg.role}: ${msg.parts[0].text}`).join('\\n')}
        
        Generate only the interview question, without any additional explanation.`;
        
        const result = await model.generateContent(prompt);
        const question = result.response.text();
        
        return question;
    }catch(error){
        console.log("Error generating question:", error);
        throw error;
    }
};

export const startInterview=async(req,res)=>{
    try {
        const {role, experienceLevel,interviewType}=req.body;

        const userId=req.user?._id || req.body.userId;

        if(!role || !experienceLevel || !interviewType){
            return res.status(400).json({
                error:"missing the required values"
            });
        }

        if(!userId){
            return res.status(400).json({
                error:"Not authenticated"
            })
        }
        const sessionId=generateSessionId();

        const newInterview=new Interview({
            user:userId,
            sessionId,
            rollType:role,
            experienceLevel,
            interviewType,
            questionsAnswers:[],
            status:"in-progress",
        });

        await newInterview.save();


        // also storing in memory for quick access during session

        interviewSessions.set(sessionId,{
            sessionId,
            mongoId:newInterview._id,
            role,
            experienceLevel,
            interviewType,
            userId,
            questions:[],
            answers:[],
            currentQuesIdx:0,
            iscompleted:false,
            startTime:new Date(),
            conversationHistory:[],
        });

        res.status(200).json({
            success:true,
            message:"interview session started",
            sessionId,
            mongoId:newInterview._id,
        });

    }
    catch(error){
        console.log("Error in starting the interview", error);
        res.status(500).json({
            message:"Internal server Error"
        })
    }

};
export const getQuestion=async(req,res)=>{
    try{
        const {sessionId}=req.params;
        if(!interviewSessions.has(sessionId)
        ){
      return res.status(404).json({error:"session not found"});
    }

    const session=interviewSessions.get(sessionId);

    if(session.iscompleted){
        return res.status(400).json({message:"Interview is already completed"});
    }

    if(session.currentQuesIdx>=5){
        return res.status(400).json({message:"All questions is done"});
    }

    // generate question if not generated 
    if(session.questions.length<=session.currentQuesIdx){
        const question=await generateQuestion(
            session.role,
            session.experienceLevel,
            session.interviewType,
            session.currentQuesIdx+1,
            session.conversationHistory
        );
    }

    session.questions.push(question);
    session.conversationHistory.push({
        role:"model",
        parts:[{text:question}]
    });

    const currQues=session.questions[session.currentQuesIdx];

    res.status(200).json({
        success:true,
        questionNumber:session.currentQuesIdx+1,
        totalQuestions:5,
        question:currQues,
        sessionId,
    });
}
catch(error){
    console.log("Error getting question", error);
    res.status(500).json({error:"failed to get question"})
}
};
