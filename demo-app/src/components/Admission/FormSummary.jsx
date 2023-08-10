import React from 'react';
import { Typography } from '@mui/material';

const FormSummary = ({ personalInfo, educationInfo, declarationInfo }) => {
   
   
    return (
        <div>
            <Typography variant="h4">Admission Form Summary</Typography>
            <Typography variant="h5">Personal Information</Typography>
            <Typography>
                Name: {personalInfo.name} <br />
                Email: {personalInfo.email} <br />
                Phone: {personalInfo.phone}
            </Typography>

            <Typography variant="h5">Education Background</Typography>
            <Typography>
                Education Level: {educationInfo.education} <br />
                University: {educationInfo.university} <br />
                Year of Graduation: {educationInfo.year}
            </Typography>

            <Typography variant="h5">Declaration</Typography>
            <Typography>
                {declarationInfo.agreed
                    ? 'You have agreed to the terms and conditions.'
                    : 'You have not agreed to the terms and conditions.'}
            </Typography>
        </div>
    );
};

export default FormSummary;