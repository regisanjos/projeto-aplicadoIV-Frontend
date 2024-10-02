import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DonationManagementPage from './pages/DonationManagementPage';
import DeliveryManagementPage from './pages/DeliveryManagementPage';
import CatastropheManagementPage from './pages/CatastropheManagementPage';
import UserManagementPage from './pages/UserManagementPage';
import UserPage from './pages/UserPage';

const PrivateRoute = ({ children, allowedRoles }) => {
  const auth = useAuth();
  return auth.user && allowedRoles.includes(auth.user.role) ? children : <Navigate to="/login" />;
};

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/admin" element={<PrivateRoute allowedRoles={['admin']}><AdminPage /></PrivateRoute>} />
      <Route path="/perfil" element={<PrivateRoute allowedRoles={['admin', 'doador', 'afetado']}><ProfilePage /></PrivateRoute>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<PrivateRoute allowedRoles={['admin']}><DashboardPage /></PrivateRoute>} />
      <Route path="/doacoes" element={<PrivateRoute allowedRoles={['doador', 'admin']}><DonationManagementPage /></PrivateRoute>} />
      <Route path="/entregas" element={<PrivateRoute allowedRoles={['doador', 'admin']}><DeliveryManagementPage /></PrivateRoute>} />
      <Route path="/catastrofes" element={<PrivateRoute allowedRoles={['admin']}><CatastropheManagementPage /></PrivateRoute>} />
      <Route path="/usuarios" element={<PrivateRoute allowedRoles={['admin']}><UserManagementPage /></PrivateRoute>} />
      <Route path="/afetado" element={<PrivateRoute allowedRoles={['afetado', 'admin']}><UserPage /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);

export default AppRoutes;
