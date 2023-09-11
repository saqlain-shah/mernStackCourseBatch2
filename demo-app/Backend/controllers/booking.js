import Booking from "../models/Booking";

export const getBooking = async (req, res, next) => {
   try {
     const getAllBooking = await Booking.find(function (err, getAllBooking) {
       if (err) res.send(err);
       res.status(200).json(getAllBooking);
     });
   } catch (err) {
     next(err);
   }
  };

  export const reservation = async (req, res, next) => {
    try {
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };

  