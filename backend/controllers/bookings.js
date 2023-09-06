import Bookings from "../models/Booking.js";
import Room from "../models/Room.js";



// New Booking 
const checkRoomAvailability = (booking) => {
  debugger;
  const bookingObj = Bookings.find();
  //console.log("bookingObj");
  if (booking.fromDate > bookingObj.toDate) return false;
  // else if (bookingObj.availability) return true;
  return true;
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


// Booking List 
export const bookingList = async (req, res, next) => {
  try {
    const list = await Bookings.find();
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

// Booking Search By Id
export const bookingSearch = async (req, res, next) => {
  try {
    const search = await Bookings.findById(req.body.id);
    res.status(200).json(search);
  
  } catch (err) {
    next(err);
  }
};


export const checkOut = async (req, res, next) => {
  try {
    await Bookings.findByIdAndDelete(req.params.id);
    res.status(200).json("Customer has been CheckOut.");
  
  } catch (err) {
    next(err);
  }
};


