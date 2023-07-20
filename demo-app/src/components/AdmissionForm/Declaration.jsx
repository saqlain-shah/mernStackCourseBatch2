import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel, Button } from '@mui/material';

const Declaration = ({ Props, Previous, data }) => {
    const [agreed, setAgreed] = useState(data);
    useEffect(() => {

        setAgreed(data.agreed)

    }, [data]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const declarationInfo = {
            agreed,
        };
        Props(declarationInfo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Declaration</h2>
            <FormControlLabel
                control={
                    <Checkbox checked={agreed} onChange={() => setAgreed(!agreed)} color="primary" />
                }
                label="I agree to the terms and conditions."
            />
            <Button onClick={Previous} variant="contained" color="primary" type="submit">
                Previous
            </Button>
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default Declaration;
