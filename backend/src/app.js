import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


//middilewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));

//import routes
import userRoutes from "./routes/user.routes.js"

// routes
app.use('/api/v1/user/', userRoutes);

const mongoUrl = "mongodb+srv://raveeshgautam:12345678910@cluster0.ueznmq8.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(mongoUrl).then(() => {
    console.log("Node js Server Has Started");
    console.log("Database Connected");
})
    .catch((e) => {
        console.log(e);
    })

app.listen(5001, () => {
    console.log('app is listening on port 5001')
})