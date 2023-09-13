import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Step1Form from '../layouts/dashboard/addForm/Step1Form';
import Step2Form from '../layouts/dashboard/addForm/Step2Form';
import Step3Form from '../layouts/dashboard/addForm/Step3Form';
import { useContext } from 'react';
import { AddFormContext } from '../context/AddContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Swal from 'sweetalert2';
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom';

const steps = ['Patients Information', 'Assesment', 'Findings'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1Form/>
    case 1:
      return <Step2Form/>
    case 2:
      return <Step3Form/>
    default:
      throw new Error('Unknown step');
  }
}

export default function AddPatient () {
const [activeStep, setActiveStep] = React.useState(0);
const {formData, setFormData} = useContext(AddFormContext);
const navigate = useNavigate();

const recordRef = collection(db, "recordData")

const addPatient = async () => {
    try {
        await addDoc(recordRef, {
          fullName: formData.fullName,
          suffix: formData.suffix,
          sex: formData.sex,
          bloodtype: formData.bloodtype,
          age: formData.age,
          address: formData.address,
          bod: formData.bod,
          bop: formData.bop,
          civil: formData.civil,
          cp: formData.cp,
          //Step2
          bp: formData.bp,
          temp: formData.temp,
          pr: formData.pr,
          weight: formData.weight,
          height: formData.height,
          bmi: formData.bmi,
          visit: formData.visit,
          type: formData.type,
          staff: formData.staff,
          chief: formData.chief,
          //step3
          diagnosis: formData.diagnosis,
          medication: formData.medication,
          laboratory: formData.laboratory,
          nhcp: formData.nhcp,
          plt: formData.plt,
          timeStamp: serverTimestamp(),
        })
        Swal.fire(
            'Added!',
            'Information has been added.',
            'success'
          )
        navigate('/dashboard/patient')
    } catch(err) {
        console.error(err);
    }
}

const handleNext = () => {
  setActiveStep(activeStep + 1);
};

const handleBack = () => {
  setActiveStep(activeStep - 1);
};

return (
  <React.Fragment>
    <CssBaseline />
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          INDIVIDUAL TREATMENT RECORD
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
            {activeStep === steps.length - 1 ?          
            <Button
                onClick={addPatient}
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
              > Add Record
            </Button> 
            :
            <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              > Next
            </Button>
            }
  
            </Box>
          </React.Fragment>
        )}
      </Paper>
      
    </Container>
  </React.Fragment>
);
}