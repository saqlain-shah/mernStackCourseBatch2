import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CircularProgress, Typography } from '@material-ui/core';
const BookingView = () => {
  const params = useParams();
  const [booking, setBooking] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getBookingDetails();
  }, [params.id]);

  const getBookingDetails = async () => {
    try {
      console.log("Booking ID:", params.id); // Log the ID
      const response = await axios.get(`http://localhost:8000/api/booking/${params.id}`, { withCredentials: true });
      console.log("API Response:", response.data); 
      setBooking(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card>
          <CardContent>
            <Typography variant="h4">Booking Details</Typography>
            <Typography variant="h5">Hotel ID: {booking.hotelId}</Typography>
            <Typography variant="h5">Room ID: {booking.roomId}</Typography>
            <Typography>From Date: {booking.fromDate}</Typography>
            <Typography>To Date: {booking.toDate}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default BookingView;
