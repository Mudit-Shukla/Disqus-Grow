import mongoose from "mongoose";

const User = new mongoose.Schema({
    name : String,
    userName : String,
    email : String,
    course : String,
    year : String,
    stream : String,
    questionsAsked : [String],
    questionAnswered : [String],
    starredQuestions : [String],
})

export default mongoose.model("user", User);