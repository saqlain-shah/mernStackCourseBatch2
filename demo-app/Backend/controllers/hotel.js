import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import upload from "../utils/multer.js";
import fs from "fs";

export const createHotel = async (req, res, next) => {
  try {

    console.log("Request Body", req.body)
    console.log("Request file ", req.file);


    // Use Multer to handle image uploads
    upload.single('photos')(req, res, async function (err) {
      if (err) {
        // Handle Multer upload error
        console.error("Error uploading images:", err); // Log the error for debugging
        return res.status(500).json({ error: "Error uploading images" });
      }

      // Continue only if there are no Multer upload errors
      try {
        // Get the file path of the uploaded image from req.file
        const photo = req.file.path;

        const {
          name,
          type,
          city,
          address,
          distance,
          title,
          desc,
          rating,
          rooms,
          cheapestPrice,
          featured,
        } = req.body;

        console.log("Request Body : ", req.body);
        console.log("Request File : ", photo);

        const newHotel = new Hotel({
          name,
          type,
          city,
          address,
          distance,
          photos: [photo], // Store the file path in an array
          title,
          desc,
          rating,
          rooms,
          cheapestPrice,
          featured,
        });

        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
      } catch (error) {
        // Handle any errors that occur during hotel creation
        console.error("Error creating hotel:", error); // Log the error for debugging
        res.status(500).json({ error: "Error creating hotel" });
      }
    });
  } catch (err) {
    console.error("Error in createHotel:", err); // Log the error for debugging
    next(err);
  }
};
export const updateHotel = async (req, res, next) => {
  console.log("Request Body ", req.body);
  console.log("Request file ", req.file);

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};
export const getHotels = async (req, res, next) => {
  console.log("Request Queries", req.query);
  const { min, max, ...others } = req.query;

  try {
    const hotels = await Hotel.find().limit(req.query.limit);

    // const HOTELS = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};