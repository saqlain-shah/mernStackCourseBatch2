import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";

const AdmissionForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        // You can send the form data to a server or perform any required actions.
        console.log("Form submitted!");
        console.log(name);
        console.log(email);
        console.log(phoneNumber);
        console.log(selectedCourse);
        alert(`Thank you for submitting your admission request! We will get back to you soon.`);
    };

    return (
        <Container maxWidth="lg">
            <Box mt={8}>
                <Typography variant="h4" align="center" gutterBottom>
                    Admission Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Full Name"
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Phone Number"
                        fullWidth
                        required
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Select Course"
                        select
                        fullWidth
                        required
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        margin="normal"
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option value="">Select a course</option>
                        <option value="math">Mathematics</option>
                        <option value="science">Science</option>
                        <option value="english">English</option>
                        <option value="history">History</option>
                    </TextField>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default AdmissionForm;
