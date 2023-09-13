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
import { useContext } from 'react';
import AddPatient from './pages/AddPatient';
import EditPatients from './pages/EditPatient.jsx';
import Loading from './components/loading/Loading';
import PatientRecordPage from './pages/PatientRecordPage';
import PDFRecord from './pages/PDFRecord';
import Scheduler from './pages/Scheduler';


// ----------------------------------------------------------------------



export default function Router() {

  const {currentUser, loading, userData} = useContext(AuthContext);

  const ProtectedRoute = ({ children, requiredRole }) => {
    if (loading) {
      return <Loading/>
    }
    if (!currentUser) {
      return <Navigate to={'/login'} replace/>
    }

    return children
  }


  const routes = useRoutes([
    {
      path: '/dashboard',
      element:  <DashboardLayout />,
      children: [
        { element:<ProtectedRoute ><Navigate to="/dashboard/app" /></ProtectedRoute> , index: true },
        { path: 'app', element: <ProtectedRoute ><DashboardAppPage /></ProtectedRoute> },
        { path: 'add', element: <ProtectedRoute ><AddPatient /></ProtectedRoute>},
        { path: 'user', element:  <ProtectedRoute ><UserPage /></ProtectedRoute>},
        { path: 'patient', element:  <ProtectedRoute ><PatientRecordPage /></ProtectedRoute>},
        { path: 'products', element: <ProtectedRoute ><ProductsPage /></ProtectedRoute>},
        { path: 'blog', element: <ProtectedRoute ><BlogPage /></ProtectedRoute>},
        { path: 'schedule', element: <ProtectedRoute ><Scheduler /></ProtectedRoute>},
        { path: 'patient/edit/:id', element: <ProtectedRoute ><EditPatients /></ProtectedRoute>},
        { path: 'patient/view/:id', element: <ProtectedRoute ><PDFRecord /></ProtectedRoute>},
      ],
    },

    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
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
