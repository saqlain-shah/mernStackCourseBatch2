import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelRoute from './routes/hotels.js';
import roomRoute from './routes/rooms.js';
import bookingRoute from './routes/bookings.js';

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS);
        console.log("Connected to MongoDB Successfully.");
    } catch (error) {
        console.error("Connection Error:", error);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
});

// Middlewares
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Define error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotel', hotelRoute);
app.use('/api/room', roomRoute);
app.use('/api/booking', bookingRoute);

app.listen(process.env.PORT, () => {
    connect();
    console.log(`Server is listening on port ${process.env.PORT}`);
    console.log("Connected to the backend.");
});
