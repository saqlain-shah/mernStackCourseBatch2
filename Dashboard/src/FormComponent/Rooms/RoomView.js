import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
  roomViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  roomViewContent: {
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
  roomame: {
    fontSize: 22,
    color: '#333',
    marginTop: 8,
  },
  details: {
    fontSize: 16,
    margin: '8px 0',
  },
});

function RoomView() {
  const classes = useStyles();
  const params = useParams();
  const [room, setroom] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // On Load
    getroomDetails();
    console.log("Welcome to room View");
  },);

  const getroomDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/room/${params.id}`, { withCredentials: true });
      setroom(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={classes.roomViewContainer}>
      <Card className={classes.roomViewContent}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>room Details</Typography>
          {isLoading ? (
            <div className={classes.loadingSpinner}>
              <CircularProgress />
            </div>
          ) : (
            <>
              <Typography variant="h5" className={classes.roomame}>{room.name}</Typography>
              <Typography className={classes.details}><strong>Type:</strong> {room.type}</Typography>
              <Typography className={classes.details}><strong>City:</strong> {room.city}</Typography>
              <Typography className={classes.details}><strong>Address:</strong> {room.address}</Typography>
              <Typography className={classes.details}><strong>Distance:</strong> {room.distance}</Typography>
              <Typography className={classes.details}><strong>Title:</strong> {room.title}</Typography>
              <Typography className={classes.details}><strong>Description:</strong> {room.desc}</Typography>
              <Typography className={classes.details}><strong>Cheapest Price:</strong> {room.cheapestPrice}</Typography>
              <Typography className={classes.details}><strong>Featured:</strong> {room.featured ? 'Yes' : 'No'}</Typography>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default RoomView;
