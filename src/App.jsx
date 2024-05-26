import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TextField from '@mui/material/TextField';
import { Radio, RadioGroup } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Student() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    location: '',
    mobile: '',
    email: '',
    dOB: '',
    gender: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Name validation
    if (name === 'name' && !/^[a-zA-Z\s]+$/.test(value)) {
      error = 'Name must contain only letters and spaces';
    }

    // Address validation
    if (name === 'address' && !/^[a-zA-Z0-9\s]+$/.test(value)) {
      error = 'Address must contain only letters, numbers, and spaces';
    }

    // Location validation
    if (name === 'location' && !/^[a-zA-Z\s]+$/.test(value)) {
      error = 'Location must contain only letters and spaces';
    }

    // Mobile validation
    if (name === 'mobile' && !/^\d+$/.test(value)) {
      error = 'Mobile must contain only numbers';
    }

    // Email validation
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Invalid email address';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      // You can perform any necessary submission action here
      alert(JSON.stringify(formData, null, 2));
    } else {
      setErrors(formErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      location: '',
      mobile: '',
      email: '',
      dOB: '',
      gender: '',
      course: '',
    });
    setErrors({});
  };

  const validateForm = (data) => {
    const errors = {};

    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(data.name)) {
      errors.name = 'Name must contain only letters and spaces';
    }

    // Address validation
    if (!/^[a-zA-Z0-9\s]+$/.test(data.address)) {
      errors.address = 'Address must contain only letters, numbers, and spaces';
    }

    // Location validation
    if (!/^[a-zA-Z\s]+$/.test(data.location)) {
      errors.location = 'Location must contain only letters and spaces';
    }

    // Mobile validation
    if (!/^\d+$/.test(data.mobile)) {
      errors.mobile = 'Mobile must contain only numbers';
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className="d-flex justify-content-center align-items-center">
      <div style={{ width: '900px' }} className="bg-light p-5 rounded">
        <h3 style={{ textAlign: 'center' }}>STUDENT REGISTRATION FORM</h3>
        <hr
          style={{
            textAlign: 'center',
            height: '3px',
            width: '100%',
            backgroundColor: 'black',
            borderRadius: '8px',
          }}
        />
        <Row>
          <Col>
            <TextField
              className="mt-3 w-100 mb-4 me-1"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
            <TextField
              className="w-100 mb-4 me-1"
              id="outlined-basic"
              label="Address"
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={errors.address ? true : false}
              helperText={errors.address}
            />
            <TextField
              className="w-100 mb-4 me-1"
              id="outlined-basic"
              label="Location"
              variant="outlined"
              name="location"
              value={formData.location}
              onChange={handleChange}
              error={errors.location ? true : false}
              helperText={errors.location}
            />
            <TextField
              className="w-100 mb-4 me-1"
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              error={errors.mobile ? true : false}
              helperText={errors.mobile}
            />
            <TextField
              className="w-100 mb-4 me-1"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Col>
          <Col>
            <h6 className="mt-3 ms-3">Date of Birth</h6>
            <input
              style={{ width: '400px' }}
              name="dOB"
              type="date"
              className="form-control ms-3"
              value={formData.dOB}
              onChange={handleChange}
            />
            <h6 className="mt-3 ms-3">Gender</h6>
            <div className="gender mt-3 ms-3 d-flex">
              <FormGroup>
                <RadioGroup
                  className="d-flex flex-row"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormGroup>
            </div>
            <div className="ms-2">
              <FormControl className="mt-3 w-100 mb-4 me-1" size="large">
                <InputLabel id="demo-select-small-label">Select Course</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Age"
                  value={formData.course}
                  name="course"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Commerce'}>Humanties</MenuItem>
                  <MenuItem value={'Commerce'}>Commerce</MenuItem>
                  <MenuItem value={'Computer Science'}>Computer Science</MenuItem>
                  <MenuItem value={'Biology'}>Biology</MenuItem>
                </Select>
                <Stack spacing={2} direction="column">
                  <Button
                    style={{ height: '60px' }}
                    className="w-100 mb-3 me-1 mt-3"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    style={{ height: '60px' }}
                    className="w-100 mb-3 me-1 mt-2"
                    variant="outlined"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Stack>
              </FormControl>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Student;