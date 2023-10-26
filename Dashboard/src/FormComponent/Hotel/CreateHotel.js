import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateHotel = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        type: '',
        city: '',
        address: '',
        distance: '',
        photos: [],
        rooms: [], // Add a field for rooms
        title: '',
        desc: '',
        cheapestPrice: 0,
        featured: false,
    });

    const addRoom = () => {
        setFormData({
            ...formData,
            rooms: [...formData.rooms, { name: '', description: '' }],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = 'http://localhost:8000/api/hotel/';

            const hotel = {
                name: formData.name,
                type: formData.type,
                city: formData.city,
                address: formData.address,
                distance: formData.distance,
                title: formData.title,
                desc: formData.desc,
                cheapestPrice: formData.cheapestPrice,
                featured: formData.featured,
                photos: formData.photos,
                rooms: formData.rooms, // Include rooms in the hotel object
            };

            const response = await axios.post(apiUrl, hotel, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'file') {
            setFormData({
                ...formData,
                photos: files[0],
            });
        } else if (name.startsWith('rooms[')) {
            const roomIndex = name.match(/\[(\d+)\]/)[1];
            const fieldName = name.match(/\.\w+/)[0].substring(1);

            setFormData({
                ...formData,
                rooms: formData.rooms.map((room, index) =>
                    index == roomIndex
                        ? { ...room, [fieldName]: type === 'checkbox' ? checked : value }
                        : room
                ),
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };
    return (
        <Container>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Distance"
                    name="distance"
                    value={formData.distance}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Description"
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    margin="normal"
                />
              <TextField
                    fullWidth
                    label="Cheapest Price"
                    name="cheapestPrice"
                    type="number"
                    value={formData.cheapestPrice}
                    onChange={handleChange}
                    margin="normal"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="featured"
                            checked={formData.featured}
                            onChange={handleChange}
                            color="primary"
                        />
                    }
                    label="Featured"
                />
                {formData.rooms.map((room, index) => (
                    <div key={index}>
                        <TextField
                            fullWidth
                            label={`Room ${index + 1} Name`}
                            name={`rooms[${index}].name`}
                            value={room.name}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label={`Room ${index + 1} Description`}
                            name={`rooms[${index}].description`}
                            value={room.description}
                            onChange={handleChange}
                            margin="normal"
                        />
                    </div>
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={addRoom}
                >
                    Add Room
                </Button>
                <input
                    type="file"
                    accept="image/*"
                    name="photos"
                    multiple
                    onChange={handleChange}
                />
                <Box mt={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
            <Link to="portal/hotel-list">
                <Button variant="contained" color="primary">
                    View Hotel List
                </Button>
            </Link>
        </Container>
    );
};

export default CreateHotel;
