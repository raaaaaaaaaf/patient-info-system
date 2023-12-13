import {
    Button,
  Card,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Scrollbar from "../components/scrollbar/Scrollbar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { keyBy } from "lodash";
import Loading from "../components/loading/Loading";
import ReactToPrint from "react-to-print";
import Iconify from "../components/iconify";

const MonthlyReportPage = () => {
  const [loading, setLoading] = useState(true);
  const [monthly, setMonthly] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = [];
        // Get the current month and year
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed, so add 1

        // Construct the timestamp range for the current month
        const startOfMonth = new Date(currentYear, currentMonth - 1, 1);
        const endOfMonth = new Date(currentYear, currentMonth, 0);

        // Query documents where timestamp is within the current month
        const dataRef = query(
          collection(db, "recordData"),
          where("timeStamp", ">=", startOfMonth),
          where("timeStamp", "<=", endOfMonth)
        );

        const dataSnap = await getDocs(dataRef);
        dataSnap.forEach((doc) => {
          data.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setMonthly(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const componentRef = useRef();
  return (
    <>
      <Helmet>
        <title> Monthly Reports | Patient Information System </title>
      </Helmet>
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

      <Container ref={componentRef}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Monthly Reports
          </Typography>
        </Stack>

        {loading ? (
          <Loading />
        ) : (
          <Card>
            <Scrollbar>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date: </TableCell>
                      <TableCell>Day: </TableCell>
                      <TableCell>Time: </TableCell>
                      <TableCell>Patient Name: </TableCell>
                      <TableCell>Diagnosis: </TableCell>
                      <TableCell>Medication: </TableCell>
                      <TableCell>Doctor/Midwife: </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {monthly.map((row) => {
                      const { id, timeStamp, fullName, diagnosis, medication, staff } =
                        row;
                      return (
                        <TableRow key={id}>
                          <TableCell>
                            {new Date(
                              timeStamp.seconds * 1000
                            ).toLocaleDateString("en-US")}
                          </TableCell>
                          <TableCell>
                            {new Date(
                              timeStamp.seconds * 1000
                            ).toLocaleDateString("en-US", { weekday: "short" })}
                          </TableCell>
                          <TableCell>
                            {new Date(
                              timeStamp.seconds * 1000
                            ).toLocaleTimeString("en-US")}
                          </TableCell>
                          <TableCell>
                            {fullName}
                          </TableCell>
                          <TableCell>
                            {diagnosis}
                          </TableCell>
                          <TableCell>
                            {medication}
                          </TableCell>
                          <TableCell>
                            {staff}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          </Card>
        )}
      </Container>
    </>
  );
};

export default MonthlyReportPage;
