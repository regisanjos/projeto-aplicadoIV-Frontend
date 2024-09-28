import React from "react";

const Logout = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
        console.log("usuario desconectado");
    };

    return (
        <button onClick={handleLogout}>Sair</button>
    );
    };

export default Logout;
