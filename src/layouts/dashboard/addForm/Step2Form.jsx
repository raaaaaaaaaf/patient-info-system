import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { AddFormContext } from "../../../context/AddContext";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Step2Form() {
  const { formData, setFormData, patient, setPatient, staff, setStaff } = useContext(AddFormContext);

  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setPatient(event.target.value);
  };

  const handleStaffChange = (event) => {
    setStaff(event.target.value);
  };

  // Define the handleInputChange function to update formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ASSESSMENT
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bp"
            name="bp"
            value={formData.bp}
            onChange={handleInputChange}
            label="Blood Pressure"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="temp"
            name="temp"
            type="number"
            value={formData.temp}
            onChange={handleInputChange}
            label="Temperature"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pr"
            name="pr"
            type="number"
            value={formData.pr}
            onChange={handleInputChange}
            label="Pulse Rate"
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="weight"
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleInputChange}
            label="Weight"
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="height"
            name="height"
            type="number"
            value={formData.height}
            onChange={handleInputChange}
            label="Height"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bmi"
            name="bmi"
            type="number"
            value={formData.bmi}
            onChange={handleInputChange}
            label="Body Mass Index"
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="visit"
            name="visit"
            value={formData.visit}
            onChange={handleInputChange}
            label="Nature of visit"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            label="Type of Consultation / Purpose of visit"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="staff"
            name="staff"
            value={formData.staff}
            onChange={handleInputChange}
            label="Name of Attending Provider"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="chief"
            name="chief"
            value={formData.chief}
            onChange={handleInputChange}
            label="Chief Complaints"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Type Patient</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={patient}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"Patient"}>Patient</MenuItem>
              <MenuItem value={"Senior Citizen"}>Senior Citizen</MenuItem>
              <MenuItem value={"Pregnants"}>Pregnants</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Staff</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={staff}
              label="Age"
              onChange={handleStaffChange}
            >
              <MenuItem value={"(Doctor) Arriva"}>(Doctor) Arriva</MenuItem>
              <MenuItem value={"(Nurse) Claudia Hope Tayabas"}>(Nurse) Claudia Hope Tayabas</MenuItem>
              <MenuItem value={"(Midwife) Marifie Baslot"}>(Midwife) Marifie Baslot</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
