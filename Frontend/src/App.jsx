import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import { Profiler } from "react";

 const App = () => {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/Profile" element={<ProfilePage />} />
                    {/*restante das rotas*/}
                </Routes>
            
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default App;