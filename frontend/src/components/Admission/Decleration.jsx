import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Button, Typography } from '@mui/material';

const Declaration = ({ Props, Prev, Data }) => {
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
            <Typography variant='h2'>Declaration</Typography>
            <FormControlLabel
                control={
                    <Checkbox checked={agreed} onChange={() => setAgreed(!agreed)} color="primary" />
                }
                label="I agree to the terms and conditions."
            /><br/>
            <Button variant="contained" color="primary" type="submit" style={{ float: 'right' }} disabled={agreed ? false : true}>
                Submit
            </Button>

            <Button onClick={Prev} variant="contained" color="primary" type="submit"  style={{ float: 'left' }}>
                Back
            </Button>
        </form>
    );
};

export default Declaration;