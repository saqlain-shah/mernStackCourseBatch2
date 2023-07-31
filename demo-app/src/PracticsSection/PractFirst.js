import React from 'react'
import 'F:/react app/mernStackCourse/demo-app/src/App.css';
import { TextField,Button } from '@mui/material';
const PractFirst = () => {

  return (
    <div className='box'>
          <TextField
                label="First Name"
                variant='outlined'
                fullWidth
                margin="normal"
            />
         
              <TextField
                label="Last Name"
                variant='outlined'
                fullWidth
                margin="normal"
            />
          
              <TextField
                label="Phone"
                variant='outlined'
                fullWidth
                margin="normal"
            />
            <Button variant='contained' color='primary' >NEXT</Button>
    </div>
  )
}

export default PractFirst