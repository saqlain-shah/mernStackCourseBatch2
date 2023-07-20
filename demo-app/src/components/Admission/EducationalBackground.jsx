import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';


const EducationBackground = ({ Props , Prev, Data}) => {
    const [EducationBackground, setEducationBackground] = useState({
        education: "",
        university: "",
        year: "",
    });

    useEffect(()=>{
        setEducationBackground(Data)
      },[Data])

    const handleSubmit = (e) => {
        e.preventDefault();
        Props(EducationBackground);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant='h2'>Education Background</Typography>
            <TextField
                label="Education Level"
                value={EducationBackground.education}
                onChange={(e) => setEducationBackground((prev) => ({
                    ...prev,
                    education: e.target.value
                }))}
                fullWidth
                margin="normal"
            />
            <TextField
                label="University"
                value={EducationBackground.university}
                onChange={(e) => setEducationBackground((prev) => ({
                    ...prev,
                    university: e.target.value
                }))}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Year of Graduation"
                value={EducationBackground.year}
                onChange={(e) => setEducationBackground((prev) => ({
                    ...prev,
                    year: e.target.value
                }))}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" type="submit" style={{ float: 'right' }} >
                Next
            </Button>

            <Button onClick={Prev} variant="contained" color="primary" type="prev"  style={{ float: 'left' }}>
                Back
            </Button>
        </form>
    );
};

export default EducationBackground;