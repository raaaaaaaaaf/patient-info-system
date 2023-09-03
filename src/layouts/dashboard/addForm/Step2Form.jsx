import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useContext } from 'react';
import { AddFormContext } from '../../../context/AddContext';

export default function Step2Form() {
    const {formData, setFormData} = useContext(AddFormContext);

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
        VITAL SIGN/ASSESSMENT
      </Typography>
      <Grid container spacing={3}>
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
            variant="standard"
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
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bp"
            name="bp"
            value={formData.bp}
            onChange={handleInputChange}
            label="Blood Pressure"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="rr"
            name="rr"
            type="number"
            value={formData.rr}
            onChange={handleInputChange}
            label="Respiration Rate"
            fullWidth
            variant="standard"
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
            variant="standard"
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
            variant="standard"
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
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}