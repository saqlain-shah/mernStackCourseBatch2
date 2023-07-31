import React from "react";
import { TextField } from "@mui/material/";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Formik, Form } from "formik";

const Pract = ({formprops}) => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        gender: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.firstname) errors.firstname = "Required!";

        if (!values.lastname) errors.lastname = "Required!";

        if (!values.email) errors.email = "Required!";

        if (!values.password) errors.password = "Required!";

        if (!values.confirmpassword) errors.confirmpassword = "Required!";
        else if (values.password !== values.confirmpassword)
          errors.confirmpassword = "Password must be same";
        return errors;
      }}
    >
      {(Formik) => (
        <Form onSubmit={Formik.handleSubmit}>
          {console.log(Formik)}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <br />
            {Formik.touched.firstname && Formik.errors.firstname && (
              <span style={{ color: "red" }}>{Formik.errors.firstname}</span>
            )}
            <br />
            <TextField
              id="outlined-basic"
              label="Fast Name"
              variant="outlined"
              name="firstname"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.firstname}
            />
            <br />
            {Formik.touched.lastname && Formik.errors.lastname && (
              <span style={{ color: "red" }}>{Formik.errors.lastname}</span>
            )}
            <br />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="lastname"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.lastname}
            />
            <br />
            {Formik.touched.email && Formik.errors.email && (
              <span style={{ color: "red" }}>{Formik.errors.email}</span>
            )}
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.email}
            />
            <br />
            {Formik.touched.password && Formik.errors.password && (
              <span style={{ color: "red" }}>{Formik.errors.password}</span>
            )}
            <br />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.password}
            />
            <br />
            {Formik.touched.confirmpassword &&
              Formik.errors.confirmpassword && (
                <span style={{ color: "red" }}>
                  {Formik.errors.confirmpassword}
                </span>
              )}
            <br />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              name="confirmpassword"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.confirmpassword}
            />
          </Box>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" name="gender">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                checked={Formik.values.gender.female}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                checked={Formik.values.gender.male}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                checked={Formik.values.gender.other}
              />
            </RadioGroup>
          </FormControl>
          <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit">Contained</Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default Pract;
