import React, { useState } from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';
import axios from 'axios';

function RoomForm() {
  const [room, setRoom] = useState({
    title: '',
    price: '',
    maxPeople: '',
    desc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8000/api/room', room);
      console.log('Room Data:', response.data);
      // You can handle the response as needed, e.g., show a success message.
    } catch (error) {
      console.error('Error:', error);
      // Handle any errors that occurred during the API request.
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Title"
              name="title"
              value={room.title}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Price"
              name="price"
              value={room.price}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Max People"
              name="maxPeople"
              value={room.maxPeople}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Description"
              name="desc"
              value={room.desc}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Save Room
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default RoomForm;
