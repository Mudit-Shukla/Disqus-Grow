import express from 'express';
import mongoose from "mongoose";

const app = express();

const mongoUrl = "mongodb+srv://disqus-grow:disqus-grow@cluster0.1oaym.mongodb.net/DisqusGrow?retryWrites=true&w=majority"
mongoose.connect(mongoUrl).then(() => {
    console.log("successfully connected");
}).catch((err) => {
    console.log(err);
})

app.listen(process.env.PORT, () => {
    console.log("Listening..");
})
