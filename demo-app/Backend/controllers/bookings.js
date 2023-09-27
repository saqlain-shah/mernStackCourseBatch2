import Bookings from "../models/Booking.js";
import Booking from "../models/Booking.js";
import Room from "../models/Room.js";

export const createBooking = async (req, res, next) => {
  try {

    const {hotelId,  roomId, fromDate, toDate } = req.body;
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({
        status: false,
        message: `Room with ID ${roomId} not found`,
      });
    }

    const existingBookings = await Booking.find({
      hotelId,
      roomId,
      $or: [
        {
          fromDate: { $gte: fromDate, $lt: toDate },
          toDate: { $gt: fromDate, $lte: toDate },
        },
        {
          fromDate: { $lte: fromDate },
          toDate: { $gte: toDate },
        },
      ],
    });

    if (existingBookings.length > 0) {
      return res.status(200).json({
        status: false,
        message: `Room is not available for the selected dates`,
      });
    }

    const newBooking = new Booking({
      hotelId,
      roomId,
      fromDate,
      toDate,
    });

    await newBooking.save();

    res.status(201).json({
      status: true,
      message: `Booking created successfully`,
      data: newBooking,
    });
  } catch (err) {
    next(err);
  }
};


// Get a list of all bookings
export const bookingList = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({
      status: true,
      data: bookings,
    });
  } catch (err) {
    next(err);
  }
};

// Search for a booking by ID
export const bookingSearch = async (req, res, next) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({
        status: false,
        message: `Booking with ID ${id} not found`,
      });
    }

    res.status(200).json({
      status: true,
      data: booking,
    });
  } catch (err) {
    next(err);
  }
};

// Check out a customer by deleting their booking
export const checkOut = async (req, res, next) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({
        status: false,
        message: `Booking with ID ${id} not found`,
      });
    }

    await Booking.findByIdAndDelete(id);

    res.status(200).json({
      status: true,
      message: `Customer has been checked out`,
    });
  } catch (err) {
    next(err);
  }
};





export const booking = async (req, res, next) => {
  const obj = {};
  obj.hotelId = req.body.hotelId;
  obj.roomId = req.body.roomId;
  obj.fromDate = req.body.fromDate;
  obj.toDate = req.body.toDate;
  const response = checkRoomAvailability(obj);

  try {
    if (!response) {
      res.status(200).json({
        status: false,
        message: `room can't book at this moment`,
      });
    }
    const newBooking = new Bookings(req.body);
    const savedBooking = await newBooking.save();
    res.status(200).json({
      status: true,
      message: `Room Id  ${obj.roomId} is Booked from ${obj.fromDate} to ${obj.fromDate}`,
    });
  } catch (err) {
    next(err);
  }
};