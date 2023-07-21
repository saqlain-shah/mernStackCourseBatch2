import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Button } from '@mui/material';

const Declaration = ({ Props, handlePrevStep }) => {
    const [agreed, setAgreed] = useState(false);

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
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Button onClick={handlePrevStep} variant="contained" color="primary" type="submit">
                    Back
                </Button>
                <Button variant="contained" color="primary" type="submit" disabled={agreed ? false : true}  >
                    Next
                </Button>
            </div>
        </form>
    );
};

export default Declaration;
