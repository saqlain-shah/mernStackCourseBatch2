import express from "express";
import {
  createBooking,
  bookingList,
  bookingSearch,
  checkOut,
} from "../controllers/bookings.js";
const router = express.Router();

//Check In
router.post("/", createBooking);

// //Booking List
router.get("/list", bookingList);

// //Search Booking By Id
router.get("/search/:id",  bookingSearch);

// //Check Out
router.delete("/checkout/:id", checkOut);

export default router;
