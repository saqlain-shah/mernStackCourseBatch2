import express from "express";
import {
  createBooking,
  bookingList,
  bookingSearch,
  checkOut,
} from "../controllers/bookings.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//Check In
router.post("/", verifyUser, createBooking);

// //Booking List
router.get("/list", verifyUser, bookingList);

// //Search Booking By Id
router.get("/search/:id", verifyUser, bookingSearch);

// //Check Out
router.delete("/checkout/:id", verifyUser, checkOut);

export default router;