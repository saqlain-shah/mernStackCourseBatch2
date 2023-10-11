import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import axios from 'axios'
// import parseCookies from "cookie-parser";

const CreateHotel = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        type: '',
        city: '',
        address: '',
        distance: '',
        photos: [],
        title: '',
        desc: '',
        cheapestPrice: 0,
        featured: false,
    });




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = 'http://localhost:8000/api/hotel/';



            const newFormData = new FormData();
            newFormData.append('name', formData.name);
            newFormData.append('type', formData.type);
            newFormData.append('city', formData.city);
            newFormData.append('address', formData.address);
            newFormData.append('distance', formData.distance);
            newFormData.append('title', formData.title);
            newFormData.append('desc', formData.desc);
            newFormData.append('rating', formData.rating);
            newFormData.append('rooms', formData.rooms);
            newFormData.append('cheapestPrice', formData.cheapestPrice);
            newFormData.append('featured', formData.featured);
            newFormData.append('photos', formData.photos);
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
            };

            // var token=JSON.stringify({
            //     "token":"some token content"
            //   });
            //   res.header('Access-Control-Allow-Origin', "http://127.0.0.1:3000");
            //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            //   res.header( 'Access-Control-Allow-Credentials',true);
            function getCookie(name) {
                const cookies = document.cookie.split("; ");
                console.log("Cookies ", cookies)
                for (const cookie of cookies) {
                    const [cookieName, cookieValue] = cookie.split("=");
                    if (cookieName === name) {
                        return cookieValue;
                    }
                    console.log("cookieName" ,cookieName)
                    console.log("cookieValue" ,cookieValue)
                }
                return null;
            }
            const token = getCookie('access_token');
            const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjNkYzY3YTg2NzNjNDU0ZDBiZDQ4ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Njg1MzI3Mn0.jlz5bSn3v3H7i_wMBgyZRdiZZlG-7t-Tr2iF--8Q4-s'
            const response = await axios.post(apiUrl, hotel, {
                headers: {
                    'authorization': `Bearer ${token}`,
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
                photos: files[0], // Set photos as a single File object
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
        </Container>
    );
};

export default CreateHotel;
