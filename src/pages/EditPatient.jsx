import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Step1Form from "../layouts/dashboard/editForm/Step1Form";
import Step2Form from "../layouts/dashboard/editForm/Step2Form";
import Step3Form from "../layouts/dashboard/editForm/Step3Form";
import { useContext, useEffect } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import { EditFormContext } from "../context/EditContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const steps = ["Patients Information", "Assesment", "Findings"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1Form />;
    case 1:
      return <Step2Form />;
    case 2:
      return <Step3Form />;
    default:
      throw new Error("Unknown step");
  }
}

export default function EditPatients() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { formData, editData, formId, bod, cstatus, patient, sex, bloodType, staff } = useContext(EditFormContext);
  const {userData} = useContext(AuthContext)
  const nav = useNavigate();

  const editPatients = async (id) => {
    // Define an array of required fields
    const requiredFields = [
      "fullName",
      "sex",
      "age",
      "address",
      "bop",
      "cp",
      "bp",
      "temp",
      "pr",
      "weight",
      "height",
      "bmi",
      "visit",
      "type",
      "staff",
      "chief",
      "diagnosis",
      "medication",
      "laboratory",
      "nhcp",
      "plt",
    ];

    // Check if any required field is missing a value
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      toast.error("Missing required fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
      return; // Exit the function early if required fields are missing
    }
    try {
      const recordDoc = doc(db, "recordData", id);
      const newData = {
        fullName: formData.fullName,
        suffix: formData.suffix,
        sex: sex,
        bloodType: bloodType,
        age: formData.age,
        address: formData.address,
        bod: bod.toDate(),
        bop: formData.bop,
        civil: cstatus,
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
        type: patient,
        staff: staff,
        //step3
        diagnosis: formData.diagnosis,
        medication: formData.medication,
        laboratory: formData.laboratory,
        nhcp: formData.nhcp,
        plt: formData.plt,
        timeStamp: serverTimestamp(),
      };
      await updateDoc(recordDoc, newData);
      toast.success('Edit was successful.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
      if (userData.role === "Admin") {
        nav("/dashboard/patient");
      } else {
        nav("/officer/patient");
      }
    } catch (err) {
      console.error(err);
    }
  };

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
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            EDIT INDIVIDUAL TREATMENT RECORD
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{
                    style: {
                      color: activeStep === index ? "#00A76F" : "#DFE3E8", // Change this to your desired active and default colors
                    },
                  }}
                >
                  {label}
                </StepLabel>
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
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                  <Button
                    onClick={() => editPatients(formId)}
                    variant="contained"
                    sx={{
                      mt: 3,
                      ml: 1,
                      backgroundColor: "#00A76F", // Change this to your desired color
                      "&:hover": {
                        backgroundColor: "#008f61", // Change this to your desired hover color
                      },
                    }}
                  >
                    {" "}
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      mt: 3,
                      ml: 1,
                      backgroundColor: "#00A76F", // Change this to your desired color
                      "&:hover": {
                        backgroundColor: "#008f61", // Change this to your desired hover color
                      },
                    }}
                  >
                    {" "}
                    Next
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
