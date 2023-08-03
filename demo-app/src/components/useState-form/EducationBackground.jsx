import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const EducationBackground = ({ Props, Previous , data}) => {
    const [education, setEducation] = useState('');
    const [university, setUniversity] = useState( '');
    const [year, setYear] = useState('');

    useEffect(() => {
        setEducation(data.education)
        setUniversity(data.university)
        setYear(data.year)


    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const educationInfo = { 
            education,
            university,
            year,
        };
        Props(educationInfo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Education Background</h2>
            <TextField
                label="Education Level"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="University"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Year of Graduation"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button onClick={Previous}  variant="contained" color="primary" type="submit">
                Previous
            </Button>
            <Button variant="contained" color="primary" type="submit">
                Next
            </Button>
        </form>
    );
};

export default EducationBackground;
