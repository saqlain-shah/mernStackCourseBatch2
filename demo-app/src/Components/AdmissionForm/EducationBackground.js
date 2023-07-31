import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const EducationBackground = ({ props, onPrev, educationInfo }) => {
const [education, setEducation] = useState({
  ...educationInfo
})
const handleChange4 = (e) => {
    
    setEducation({...education,education:e.target.value});
};
const handleChange5 = (e) => {
    setEducation({...education,university:e.target.value});
};
const handleChange6 = (e) => {
    setEducation({...education,year:e.target.value});
};

const handleSubmit = (e) => {
  e.preventDefault();
  props(education);
};

    return (
        <form onSubmit={handleSubmit}>
            <h2>Education Background</h2>
            <TextField
                label="Education Level"
                value={education.education}
                onChange={handleChange4}
                fullWidth
                name='education'
                margin="normal"
            />
            <TextField
                label="University"
                value={education.university}
                onChange={handleChange5}
                fullWidth
                margin="normal"
                name='university'
            />
            <TextField
                label="Year of Graduation"
                value={education.year}
                onChange={handleChange6}
                fullWidth
                margin="normal"
                name='year'
            />
            <Button variant="contained" color="primary" type="submit">
                Next
            </Button>
            <button type="button" className="btn btn-primary" onClick={onPrev}>Privious</button>
        </form>
    );
};

export default EducationBackground;