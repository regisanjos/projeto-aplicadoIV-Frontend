import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>Painel do Administrador</h1>
      <div className="admin-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/doacoes">Gerenciamento de Doações</Link>
        <Link to="/entregas">Gerenciamento de Entregas</Link>
        <Link to="/catastrofes">Gerenciamento de Catástrofes</Link>
        <Link to="/usuarios">Gerenciamento de Usuários</Link>
      </div>
    </div>
  );
};

export default AdminPage;
