import React from "react";
import Users from "./components/Users";
import Deliverys from "./components/Deliverys";
import Donations from "./components/Donations";
import Catastrophes from "./components/Catastrophes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AdminPage = () => {
    return (
        <div className="admin-page">
            <h1>Painel Administrativo</h1>
            <Users/>
            <Deliverys/>
            <Donations/>
            <Catastrophes/> 

        </div>
    );
};

export default AdminPage;
