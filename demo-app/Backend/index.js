import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/AuthRoute.js";
import usersRoute from "./routes/UsersRoute.js";
import hotelRoute from "./routes/HotelRoute.js";
import roomRoute from "./routes/RoomRoute.js";
import bookingRoute from "./routes/BookingRoute.js"


const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS);
        console.log("Connected to mongoDB.");
    } catch  {
        console.log("Connection Error");
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotel", hotelRoute);
app.use("/api/room", roomRoute);
app.use("/api/booking", bookingRoute);


app.listen(process.env.PORT, () => {
    connect();
    console.log(`server listen on port ${process.env.PORT}`);
    console.log("Connected to backend.");
  });
  