import React from 'react'
import { TextField,Button } from '@mui/material';
const PractThird = () => {
  return (
    <div className='firstbox'>
         <TextField
                label="Gender"
                variant='outlined'
                fullWidth
                margin="normal"
            />
        
            <TextField
                label="Hobbies"
                variant='outlined'
                fullWidth
                margin="normal"
            />
          
              <TextField
                label="Age"
                variant='outlined'
                fullWidth
                margin="normal"
            />
             <Button variant='contained' color='primary'>NEXT</Button>
    </div>
  )
}

export default PractThird