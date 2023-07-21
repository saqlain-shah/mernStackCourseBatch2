import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const EducationBackground = ({ Props, handlePrevStep, educationInfo }) => {

    const [educationalDetail, setEducationalDetail] = useState({ ...educationInfo });

    const handleSubmit = (e) => {
        e.preventDefault();
        Props(educationalDetail);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Education Background</h2>
            <TextField
                label="Education Level"
                value={educationalDetail.education}
                onChange={(e) => setEducationalDetail((prevDetails) => ({
                    ...prevDetails,
                    education: e.target.value,
                }))}
                fullWidth
                margin="normal"
            />
            <TextField
                label="University"
                value={educationalDetail.university}
                onChange={(e) => setEducationalDetail((prevDetails) => ({
                    ...prevDetails,
                    university: e.target.value,
                }))}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Year of Graduation"
                value={educationalDetail.year}
                onChange={(e) => setEducationalDetail((prevDetails) => ({
                    ...prevDetails,
                    year: e.target.value,
                }))}
                fullWidth
                margin="normal"
            />

            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Button onClick={handlePrevStep} variant="contained" color="primary" type="submit">
                    Back
                </Button>
                <Button variant="contained" color="primary" type="submit">
                    Next
                </Button>
            </div>
        </form>
    );
};

export default EducationBackground;
