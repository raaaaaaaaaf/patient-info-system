import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import RegisterPage from './pages/RegisterPage';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import { AuthContext } from './context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import AddPatient from './pages/AddPatient';
import EditPatients from './pages/EditPatient.jsx';
import Loading from './components/loading/Loading';
import PatientRecordPage from './pages/PatientRecordPage';
import PDFRecord from './pages/PDFRecord';
import Scheduler from './pages/Scheduler';
import UserDashboardAppPage from './pages/UserDashboardAppPage';
import PatientViewPage from './pages/PatientViewPage.jsx';
import LoginPage1 from './pages/login.jsx';
import SeniorRecordPage from './pages/SeniorRecordPage.jsx';
import PregnancyRecordPage from './pages/PregnancyRecordPage.jsx';
import MonthlyReportPage from './pages/MonthlyReportPage.jsx';



// ----------------------------------------------------------------------



export default function Router() {

  const ProtectedRoute = ({ children, requiredRole }) => {
    const {currentUser, loading, userData} = useContext(AuthContext);
    const [timedOut, setTimedOut] = useState(false);
  
    useEffect(() => {
      // Set a timeout to consider the loading taking too long
      const timeoutId = setTimeout(() => {
        setTimedOut(true);
      }, 2000); // 5 seconds timeout (adjust as needed)
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
  
    if (loading) {
      if (timedOut) {
        // Redirect to login page if loading takes too long
        return <Navigate to="/login" replace />;
      } else {
        return <div>...</div>;
      }
    }
    if (!currentUser ) {
      return <Navigate to={'/login'} replace/>
    }
    if (requiredRole && userData.role !== requiredRole) {
      if (userData.role === 'Admin') {
        return <Navigate to={'/dashboard'} />
      } else {
        return <Navigate to={'/officer'} />
      }
    }

    return children
  }


  const routes = useRoutes([


    {
      path: '/dashboard',
      element:  <DashboardLayout />,
      children: [
        { element:<ProtectedRoute requiredRole={'Admin'} ><Navigate to="/dashboard/app" /></ProtectedRoute>, index: true },
        { path: 'app', element: <ProtectedRoute requiredRole={'Admin'} ><DashboardAppPage /></ProtectedRoute> },
        { path: 'add', element: <ProtectedRoute requiredRole={'Admin'} ><AddPatient /></ProtectedRoute>},
        { path: 'user', element:  <ProtectedRoute requiredRole={'Admin'} ><UserPage /></ProtectedRoute>},

        { path: 'patient', element:  <ProtectedRoute requiredRole={'Admin'} ><PatientRecordPage /></ProtectedRoute>},
        { path: 'patient/edit/:id', element: <ProtectedRoute requiredRole={'Admin'} ><EditPatients /></ProtectedRoute>},
        { path: 'patient/view/:id', element: <ProtectedRoute requiredRole={'Admin'} ><PatientViewPage /></ProtectedRoute>},

        { path: 'senior', element:  <ProtectedRoute requiredRole={'Admin'} ><SeniorRecordPage /></ProtectedRoute>},
        { path: 'senior/edit/:id', element: <ProtectedRoute requiredRole={'Admin'} ><EditPatients /></ProtectedRoute>},
        { path: 'senior/view/:id', element: <ProtectedRoute requiredRole={'Admin'} ><PatientViewPage /></ProtectedRoute>},

        { path: 'pregnancy', element:  <ProtectedRoute requiredRole={'Admin'} ><PregnancyRecordPage /></ProtectedRoute>},
        { path: 'pregnancy/edit/:id', element: <ProtectedRoute requiredRole={'Admin'} ><EditPatients /></ProtectedRoute>},
        { path: 'pregnancy/view/:id', element: <ProtectedRoute requiredRole={'Admin'} ><PatientViewPage /></ProtectedRoute>},

        { path: 'products', element: <ProtectedRoute requiredRole={'Admin'} ><ProductsPage /></ProtectedRoute>},
        { path: 'blog', element: <ProtectedRoute requiredRole={'Admin'} ><BlogPage /></ProtectedRoute>},
        { path: 'monthly', element: <ProtectedRoute requiredRole={'Admin'} ><MonthlyReportPage /></ProtectedRoute>},
        { path: 'schedule', element: <ProtectedRoute requiredRole={'Admin'} ><Scheduler /></ProtectedRoute>},

      ],
    },
    {
      path: 'login',
      element: <LoginPage1 />,
    },

    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      path: '/officer',
      element:  <DashboardLayout />,
      children: [
        { element:<ProtectedRoute requiredRole={'User'} ><Navigate to="/officer/app" /></ProtectedRoute>, index: true },
        { path: 'app', element: <ProtectedRoute requiredRole={'User'} ><UserDashboardAppPage /></ProtectedRoute> },
        { path: 'add', element: <ProtectedRoute requiredRole={'User'} ><AddPatient /></ProtectedRoute>},
        { path: 'user', element:  <ProtectedRoute requiredRole={'User'} ><UserPage /></ProtectedRoute>},
        { path: 'patient', element:  <ProtectedRoute requiredRole={'User'} ><PatientRecordPage /></ProtectedRoute>},
        { path: 'patient/edit/:id', element: <ProtectedRoute requiredRole={'User'} ><EditPatients /></ProtectedRoute>},
        { path: 'patient/view/:id', element: <ProtectedRoute requiredRole={'User'} ><PatientViewPage /></ProtectedRoute>},

        { path: 'senior', element:  <ProtectedRoute requiredRole={'User'} ><SeniorRecordPage /></ProtectedRoute>},
        { path: 'senior/edit/:id', element: <ProtectedRoute requiredRole={'User'} ><EditPatients /></ProtectedRoute>},
        { path: 'senior/view/:id', element: <ProtectedRoute requiredRole={'User'} ><PatientViewPage /></ProtectedRoute>},

        { path: 'pregnancy', element:  <ProtectedRoute requiredRole={'User'} ><PregnancyRecordPage /></ProtectedRoute>},
        { path: 'pregnancy/edit/:id', element: <ProtectedRoute requiredRole={'User'} ><EditPatients /></ProtectedRoute>},
        { path: 'pregnancy/view/:id', element: <ProtectedRoute requiredRole={'User'} ><PatientViewPage /></ProtectedRoute>},

        { path: 'monthly', element: <ProtectedRoute requiredRole={'User'} ><MonthlyReportPage /></ProtectedRoute>},
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <ProtectedRoute ><Navigate to="/dashboard/app" /></ProtectedRoute> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
