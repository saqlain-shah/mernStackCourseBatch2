import React, { useRef, useEffect } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, Box, TextField } from '@mui/material';
import { Data, addFormData } from './Data'; // Provide the correct path
import Table from './Table';


const CourseOptions = ['c++', 'MERN', 'MS Office'];

const Form = () => {
  const idRef = useRef();
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const courseRef = useRef(null);
  const addressRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = {
      id: idRef.current.value,
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      course: courseRef.current.value,
      address: addressRef.current.value,
      [Symbol.iterator]: Array.prototype[Symbol.iterator]
    };

    addFormData(newData);
    
    // Clear form fields
    idRef.current.value = '';
    nameRef.current.value = '';
    ageRef.current.value = '';
    emailRef.current.value = '';
    phoneNumberRef.current.value = '';
    addressRef.current.value = '';
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Box m={2}>
          <TextField inputRef={idRef} label="ID" fullWidth />
        </Box>
        <Box m={2}>
          <TextField inputRef={nameRef} label="Name" fullWidth />
        </Box>
        <Box m={2}>
          <TextField inputRef={ageRef} label="Age" type="number" fullWidth />
        </Box>
        <Box m={2}>
          <TextField inputRef={emailRef} label="Email" type="email" fullWidth />
        </Box>
        <Box m={2}>
          <TextField inputRef={phoneNumberRef} label="Phone Number" fullWidth />
        </Box>
        <Box m={2}>
          <FormControl fullWidth>
            <InputLabel>Course</InputLabel>
            <Select inputRef={courseRef}>
              {CourseOptions.map((course, index) => (
                <MenuItem key={index} value={course}>
                  {course}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box m={2}>
          <TextField inputRef={addressRef} label="Address" fullWidth />
        </Box>
        <Box m={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
      <Table />
    </React.Fragment>
  );
};

export default Form;
