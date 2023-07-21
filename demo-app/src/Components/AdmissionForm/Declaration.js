
import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Button } from '@mui/material';

const Declaration = ({ Props,  onPrev }) => {
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
            <Button disabled={agreed?false:true} variant="contained" color="primary" type="submit">
                Submit
            </Button>
             <button type="button" className="btn btn-primary" onClick={onPrev}>Previous</button>

        </form>
    );
};

export default Declaration;