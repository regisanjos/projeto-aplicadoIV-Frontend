import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./components/Dashboard";
import UserManagementPage from "./pages/UserManagementPage";
import DonationManagementPage from "./pages/DonationManagementPage";
import DeliveryManagementPage from "./pages/DeliveryManagementPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import CatastropheManagement from "./pages/CatastropheManagement";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
    return (
        <Router>
            <switch>
                {/*rotas publicas*/}
                <Route exact path="/" component={<HomePage />} />
                <Route exact path="/login" component={<LoginPage />} />
                
                {/*rotas privadas*/}

                <PrivateRoute exact path="/admin" component={<AdminPage />} />
                <PrivateRoute exact path="/dashboard" component={<Dashboard />} />
                <PrivateRoute exact path="/userManagement" component={<UserManagementPage />} />
                <PrivateRoute exact path="/donationManagement" component={<DonationManagementPage />} />
                <PrivateRoute exact path="/deliveryManagement" component={<DeliveryManagementPage />} />
                <PrivateRoute exact path="/profile" component={<ProfilePage />} />
                <PrivateRoute exact path="/catastropheManagement" component={<CatastropheManagement />} />
                

                {/*rotas nao encontradas*/}

                <Route path="*" component={<NotFoundPage />} />

            </switch>
        </Router>
    );
};

export default Routes;