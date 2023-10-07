import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { EditFormContext } from "../../../context/EditContext";

export default function Step1Form() {
  const { formData, setFormData, editData } = useContext(EditFormContext);

  // Define the handleInputChange function to update formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Define the specific fields you want to populate from editData
  const fieldsToPopulate = 
  [
    "fullName", 
    "suffix",
    "sex",
    "bloodtype",
    "age",
    "address",
    "bod",
    "bop",
    "civil",
    "cp",

  ];

  // Use useEffect to populate only the specific fields from editData
  React.useEffect(() => {
    const updatedFormData = { ...formData };

    for (const field of fieldsToPopulate) {
      updatedFormData[field] = editData[field];
    }

    setFormData(updatedFormData);
  }, [editData]);

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
            variant="standard"
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
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sex"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
            label="Sex"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bloodtype"
            name="bloodtype"
            value={formData.bloodtype}
            onChange={handleInputChange}
            label="Blood Type"
            fullWidth
            variant="standard"
          />
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
            variant="standard"
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
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bod"
            name="bod"
            value={formData.bod}
            onChange={handleInputChange}
            label="Birth Date"
            fullWidth
            variant="standard"
          />
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
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="civil"
            name="civil"
            value={formData.civil}
            onChange={handleInputChange}
            label="Civil Status"
            fullWidth
            variant="standard"
          />
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
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
