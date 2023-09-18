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
      <Grid container spacing={6}>
        <Grid item xs={20}>
          <TextField
            required
            id="diagnosis"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleInputChange}
            label="Diagnosis:"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="medication"
            name="medication"
            value={formData.medication}
            onChange={handleInputChange}
            label="Medication / Treatment:"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="laboratory"
            name="laboratory"
            value={formData.laboratory}
            onChange={handleInputChange}
            label="Laboratory Findings / Impression:"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="nhcp"
            name="nhcp"
            value={formData.nhcp}
            onChange={handleInputChange}
            label="Name of Health Care Provider:"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="plt"
            name="plt"
            value={formData.plt}
            onChange={handleInputChange}
            label="Performed Laboratory Test"
            fullWidth
            variant="standard"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}