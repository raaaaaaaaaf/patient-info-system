import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { AddFormContext } from "../../../context/AddContext";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Step1Form() {
  const { formData, setFormData, cstatus, setCstatus, bod, setBod, sex, setSex, bloodType, setBloodType } =
    useContext(AddFormContext);


  const handleCivilChange = (event) => {
    setCstatus(event.target.value);
  };
  const handleSexChange = (event) => {
    setSex(event.target.value);
  };
  const handleBloodChange = (event) => {
    setBloodType(event.target.value);
  };

  // Define the handleInputChange function to update formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBodChange = (date) => {
    setBod(date);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Patients Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            label="Full Name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="suffix"
            name="suffix"
            value={formData.suffix}
            onChange={handleInputChange}
            label="Suffix (e.g.Js.,Sr.,II,III)"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sex</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sex}
              label="Age"
              onChange={handleSexChange}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>

            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Blood Types</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bloodType}
              label="Age"
              onChange={handleBloodChange}
            >
              <MenuItem value={"A"}>A+</MenuItem>
              <MenuItem value={"A-"}>A-</MenuItem>
              <MenuItem value={"B+"}>B+</MenuItem>
              <MenuItem value={"B-"}>B-</MenuItem>
              <MenuItem value={"O+"}>O+</MenuItem>
              <MenuItem value={"O-"}>O-</MenuItem>
              <MenuItem value={"AB+"}>AB+</MenuItem>
              <MenuItem value={"AB-"}>AB-</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            label="Age"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            label="Residential Address"
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={bod}
              onChange={handleBodChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bop"
            name="bop"
            value={formData.bop}
            onChange={handleInputChange}
            label="Birth Place"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Civil Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cstatus}
              label="Age"
              onChange={handleCivilChange}
            >
              <MenuItem value={"Single"}>Single</MenuItem>
              <MenuItem value={"Married"}>Married</MenuItem>
              <MenuItem value={"Widowed"}>Widowed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cp"
            name="cp"
            value={formData.cp}
            onChange={handleInputChange}
            label="Contact No."
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
