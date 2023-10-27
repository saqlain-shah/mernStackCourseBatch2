import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  hotelViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  hotelViewContent: {
    background: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 16,
    maxWidth: 600,
    width: '80%',
    transition: 'transform 0.3s',
  },
  loadingSpinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
  hotelName: {
    fontSize: 22,
    color: '#333',
    marginTop: 8,
  },
  details: {
    fontSize: 16,
    margin: '8px 0',
  },
  photosContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  photoThumbnail: {
    maxWidth: '100px',
    maxHeight: '100px',
    margin: '8px',
  },
});

function HotelView() {
  const classes = useStyles();
  const params = useParams();
  const [hotel, setHotel] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getHotelDetails();
    console.log("Welcome to Hotel View");
  }, []);

  const getHotelDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/hotel/${params.id}`, { withCredentials: true });
      console.log("API Response:", response.data); 
      setHotel(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <div className={classes.hotelViewContainer}>
      <Card className={classes.hotelViewContent}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>
            Hotel Details
          </Typography>
          {isLoading ? (
            <div className={classes.loadingSpinner}>
              <CircularProgress />
            </div>
          ) : (
            <>
              <Typography variant="h5" className={classes.hotelName}>
                {hotel.name}
              </Typography>
              <Typography className={classes.details}><strong>Type:</strong> {hotel.type}</Typography>
              <Typography className={classes.details}><strong>City:</strong> {hotel.city}</Typography>
              <Typography className={classes.details}><strong>Address:</strong> {hotel.address}</Typography>
              <Typography className={classes.details}><strong>Distance:</strong> {hotel.distance}</Typography>
              <Typography className={classes.details}><strong>Title:</strong> {hotel.title}</Typography>
              <Typography className={classes.details}><strong>Description:</strong> {hotel.desc}</Typography>
              <Typography className={classes.details}><strong>Cheapest Price:</strong> {hotel.cheapestPrice}</Typography>
              <Typography className={classes.details}><strong>Featured:</strong> {hotel.featured ? 'Yes' : 'No'}</Typography>

              {/* Display Rooms */}
              <Typography className={classes.details}>
                <strong>Rooms:</strong> {hotel.rooms.join(', ')}
              </Typography>

              {/* Display Photos */}
              <div className={classes.details}>
                <strong>Photos:</strong>
                <div className={classes.photosContainer}>
                  {hotel.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={`http://localhost:8000${photo}`}
                      alt={`Photo ${index}`}
                      className={classes.photoThumbnail}
                      onError={(e) => {
                        e.target.src = 'logo.png'; // Display a fallback image in case of an error.
                      }}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default HotelView;
