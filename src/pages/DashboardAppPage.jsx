import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { useEffect, useState } from 'react';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Loading from '../components/loading/Loading';


// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const [userCount, setUserCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [lastMonth, setLastMonth] = useState(null)
  const [prevMonth, setPrevMonth] = useState(null)
  const [diff, setDiff] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const today = new Date();
        const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
        const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2))

        const userRef = query(collection(db, "users"))
        const userSnap = await getDocs(userRef);

        const patientRef = query(collection(db, "recordData"))
        const patientSnap = await getDocs(patientRef)



        const lastMonthRef = query(collection(db, "recordData"), where("timeStamp", "<=", today), where("timeStamp", ">", lastMonth))
        const lastMonthSnap = await getDocs(lastMonthRef)

        const prevMonthRef = query(collection(db, "recordData"), where("timeStamp", "<=", lastMonth), where("timeStamp", ">", prevMonth))
        const prevMonthSnap = await getDocs(prevMonthRef)

        setUserCount(userSnap.docs.length)
        setPatientCount(patientSnap.docs.length)
        setLastMonth(lastMonthSnap.docs.length)
        setPrevMonth(prevMonthSnap.docs.length)
        setDiff((lastMonthSnap.docs.length - prevMonthSnap.docs.length) / (prevMonthSnap.docs.length) * 100)
      } catch(err) {
        console.error(err);
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <Helmet>
        <title> Dashboard | Patient Information </title>
      </Helmet>

      {loading ? (
        <Loading/>
      ) : (
        <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Patient Information System
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary title="USERS" total={userCount} color="info" icon={'mdi:user'} />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary title="PATIENTS" total={patientCount} color="info" icon={'fluent:patient-20-filled'} />
          </Grid>


          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates
              title="Patient Visit"
              subheader={`${diff}% more than last month`}
              chartData={[
                { label: 'October', value: `${lastMonth}` },
                { label: 'September', value: `${prevMonth}` },
                
              ]}
            />
          </Grid>

        </Grid>
      </Container>
      )}


    </>
  );
}
