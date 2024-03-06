import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(port, () => {
    connect();
    console.log("Connected!")
})