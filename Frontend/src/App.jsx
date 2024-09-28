import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  AuthContextProvider  from "./context/AuthContext";
import  DashboardPage  from "./pages/DashboardPage";
import  LoginPage  from "./pages/LoginPage";
import  ProfilePage  from "./pages/ProfilePage";
import  HomePage  from "./pages/HomePage";
import  AdminPage  from "./pages/AdminPage";
import  UserManagementPage  from "./pages/UserManagementPage";
import  DonationManagementPage  from "./pages/DonationManagementPage";
import  DeliveryManagementPage  from "./pages/DeliveryManagementPage";
import  CatastropheManagement  from "./pages/CatastropheManagement";
import  NotFoundPage  from "./pages/NotFoundPage";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user-management" element={<UserManagementPage />} />
          <Route path="/donation-management" element={<DonationManagementPage />} />
          <Route path="/delivery-management" element={<DeliveryManagementPage />} />
          <Route path="/catastrophe-management" element={<CatastropheManagement />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* restante das rotas */}
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};
export default App;