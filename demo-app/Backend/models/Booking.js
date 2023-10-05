import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema({
  hotelId: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Booking", BookingSchema);


