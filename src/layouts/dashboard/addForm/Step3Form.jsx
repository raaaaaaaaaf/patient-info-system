import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useContext } from 'react';
import { AddFormContext } from '../../../context/AddContext';

export default function Step3Form() {
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
        Findings
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="findings1"
            name="findings1"
            value={formData.findings1}
            onChange={handleInputChange}
            label="Findings"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleInputChange}
            label="Doctor"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nurse"
            name="nurse"
            value={formData.nurse}
            onChange={handleInputChange}
            label="Nurse/Midwife"
            fullWidth
            variant="standard"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}