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

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Patient Information </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Patient Information System
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="PATIENTS" total={71} color="info" icon={'ant-design:meh-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="DOCTORS" total={5} color="info" icon={'ant-design:heart-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="STAFFS" total={10} color="info" icon={'ant-design:idcard-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="ALL RECORDS" total={234} color="info" icon={'ant-design:save-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Patient Visits"
              subheader="(+20%) than last month"
              chartLabels={[
                '10/01/2022',
                '11/01/2022',
                '12/01/2022',
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
              ]}
              chartData={[
                {
                  name: 'Purok - 1',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Purok - 2',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Purok - 3',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Purok - 4',
                  type: 'line',
                  fill: 'solid',
                  data: [20, 45, 30, 35, 25, 45, 84, 42, 69, 56, 49],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits per Purok"
              chartData={[
                { label: 'Purok - 1', value: 44 },
                { label: 'Purok - 2', value: 35 },
                { label: 'Purok - 3', value: 43 },
                { label: 'Purok - 4', value: 43 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
