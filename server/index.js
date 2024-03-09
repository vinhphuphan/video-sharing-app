import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

dotenv.config()
const app = express();
const port = 8080;
const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("Connected to DB!")
        })
        .catch((error) => {
            throw error;
        })
}

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth" , authRoutes);
app.use("/api/users" , userRoutes);
app.use("/api/videos" , videoRoutes);
app.use("/api/comments" , commentRoutes);

app.use((error, req, res ,next) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong!";
    return res.status(status).json({
        success : false,
        status,
        message,
    })
})

app.listen(port, () => {
    connect();
    console.log("Connected!")
})