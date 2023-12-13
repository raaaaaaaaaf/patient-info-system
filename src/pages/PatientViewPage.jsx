import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Iconify from "../components/iconify";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Loading from "../components/loading/Loading";
import ReactToPrint from "react-to-print";

const PatientViewPage = () => {
  const [patient, setPatient] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const recordRef = doc(db, "recordData", id);

    const fetchData = async () => {
      try {
        const docSnapshot = await getDoc(recordRef);

        if (docSnapshot.exists()) {
          setPatient({ ...docSnapshot.data(), id: docSnapshot.id });
        } else {
          setPatient({});
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setPatient({});
      }
    };

    fetchData();
  }, [id]);

  const componentRef = useRef();

  return (
    <>
      <Helmet>Patient View Page | Patient Information</Helmet>
      <ReactToPrint
        trigger={() => {
          // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
          // to the root node of the returned component as it will be overwritten.
          return (
            <Button
              variant="contained"
              color="inherit"
              startIcon={<Iconify icon="material-symbols:print-outline" />}
            >
              Print
            </Button>
          );
        }}
        content={() => componentRef.current}
      />
      {loading ? (
        <Loading />
      ) : (
        <Container ref={componentRef}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            mb={5}
          >
            <Typography variant="subtitle1">
              Patient Information System (PISYS)
            </Typography>
            <Typography variant="h4" gutterBottom>
              Individual Treatment Record
            </Typography>
          </Stack>
          <Typography variant="h6">
            I. PATIENT INFORMATION (IMPORMASYON NG PASYENTE)
          </Typography>
          <Divider />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>Full Name: {patient.fullName}</Typography>
              <Typography>Age: {patient.age}</Typography>
              <Typography>
                Birth Date:{" "}
                {new Date(patient.bod.seconds * 1000).toLocaleDateString("en-US")}
              </Typography>
              <Typography>Address: {patient.address}</Typography>
              <Typography>Civil Status: {patient.civil}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>
                Suffix (e.g. Jr., Sr., II, III): {patient.suffix}
              </Typography>
              <Typography>Sex: {patient.sex}</Typography>
              <Typography>Birth Place: {patient.bop}</Typography>
              <Typography>Blood Type: {patient.bloodtype}</Typography>
              <Typography>Contact No.: {patient.cp}</Typography>
            </Grid>
          </Grid>

          <Divider />
          <Typography variant="h6">II. ASSESSMENT</Typography>
          <Divider />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>
                Date of Consultation:{" "}
                {new Date(patient.timeStamp.seconds * 1000).toLocaleDateString(
                  "en-US"
                )}
              </Typography>
              <Typography>Blood Pressure: {patient.bp}mmHg</Typography>
              <Typography>Height: {patient.height}cm</Typography>
              <Typography>Boday Mass Index: {patient.bmi}BMI</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>
                Consultation Time:{" "}
                {new Date(patient.timeStamp.seconds * 1000).toLocaleTimeString(
                  "en-US"
                )}
              </Typography>
              <Typography>Temperature: {patient.temp}° </Typography>
              <Typography>Weight: {patient.weight}kg</Typography>
              <Typography>Pulse Rate: {patient.pr}bpm</Typography>
            </Grid>
          </Grid>

          <Divider />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>Nature of Visit: {patient.visit}</Typography>
              <Typography>
                Name of Attending Provider: {patient.staff}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>
                Type of Consultation / Purpose of visit: {patient.type}
              </Typography>
              <Typography>Chief Complaints: {patient.chief} </Typography>
            </Grid>
          </Grid>

          <Divider style={{ marginBottom: "16px" }} />

          <Typography>Diagnosis: {patient.diagnosis} </Typography>

          <Divider style={{ marginTop: "16px" }} />

          <Divider style={{ marginBottom: "16px" }} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>
                Medication Treatment: {patient.medication}{" "}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>
                Name of Health Care Provider: {patient.nhcp}{" "}
              </Typography>
            </Grid>
          </Grid>

          <Divider style={{ marginTop: "16px" }} />

          <Divider style={{ marginBottom: "16px" }} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>
                Laboratory Findings / Impression: {patient.laboratory}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>Performed Laboratory Test: {patient.plt}</Typography>
            </Grid>
          </Grid>

          <Divider style={{ marginTop: "16px" }} />
        </Container>
      )}
    </>
  );
};

export default PatientViewPage;
