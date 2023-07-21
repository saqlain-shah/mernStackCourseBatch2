import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';

const FormSummary = ({ personalInfo, educationInfo, declarationInfo, setStep, setEducationInfo, setPersonalInfo }) => {

    const [Popup, setpopup] = useState(false)
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (Popup) {
    //             setpopup(false)
    //         }
    //     }, 3000);
    // }, [Popup])

    const handleSubmit = () => {
        setpopup(true)
        setTimeout(() => {
            setStep(0)
            setEducationInfo({})
            setPersonalInfo({})
            setpopup(false)
        }, 3000);
    }


    const { name_, phone, email } = personalInfo;
    const { education, university, year } = educationInfo;
    const { agreed } = declarationInfo;

    return (
        <div>
            {Popup ?
                <div><h3>Your Form is submitted !</h3></div>
                :

                <>
                    <h2>Admission Form Summary</h2>

                    <h3>Personal Information</h3>

                    <Typography>
                        Name: {name_} <br />
                        Email: {email} <br />
                        Phone: {phone}
                    </Typography>

                    <h3>Education Background</h3>

                    <Typography>
                        Education Level: {education} <br />
                        University: {university} <br />
                        Year of Graduation: {year}
                    </Typography>

                    <h3>Declaration</h3>

                    <Typography>
                        {agreed
                            ? 'You have agreed to the terms and conditions.'
                            : 'You have not agreed to the terms and conditions.'}
                    </Typography>
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                        <Button onClick={handleSubmit} variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </>}
        </div>
    );
};

export default FormSummary;
