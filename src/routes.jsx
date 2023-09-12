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

// ----------------------------------------------------------------------



export default function Router() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={'/login'} replace/>
    }
    return children
  }


  const routes = useRoutes([
    {
      path: '/dashboard',
      element:  <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <ProtectedRoute><DashboardAppPage /></ProtectedRoute> },
        { path: 'add', element: <ProtectedRoute><AddPatient /></ProtectedRoute>},
        { path: 'user', element:  <ProtectedRoute><UserPage /></ProtectedRoute>},
        { path: 'products', element: <ProtectedRoute><ProductsPage /></ProtectedRoute>},
        { path: 'blog', element: <ProtectedRoute><BlogPage /></ProtectedRoute>},
        { path: 'user/edit/:id', element: <ProtectedRoute><EditPatients /></ProtectedRoute>},
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
