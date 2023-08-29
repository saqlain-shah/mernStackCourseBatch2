import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = async () => {
    try {
       await mongoose.connect(process.env.Mongodb_Atlas);
        console.log("Backend connected")
    } catch {
        console.log("error");
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb is disconnected!")
})


app.listen(process.env.PORT, () => {
    connect();
    console.log(`Server is running on port: ${process.env.PORT}`);
});

