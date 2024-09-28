import React from "react";
import Donations from "../components/Donations";

const DonationManagementPage = () => {
    return (
        <div className="donation-management-page">
            <h1>Gestão de Doações</h1>
            <Donations/>
        </div>
    );
};

export default DonationManagementPage;
