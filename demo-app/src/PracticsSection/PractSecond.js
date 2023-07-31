import React from 'react'

import { TextField,Button } from '@mui/material';
const PractSecond = () => {
  return (
    <div>
        <TextField
                label="Email"
                variant='outlined'
                fullWidth
                margin="normal"
            />
   
            <TextField
                label="Password"
                variant='outlined'
                fullWidth
                margin="normal"
            />

              <TextField
                label="Confirm Password"
                variant='outlined'
                fullWidth
                margin="normal"
            />
             <Button variant='contained' color='primary'>NEXT</Button>
    </div>
  )
}

export default PractSecond