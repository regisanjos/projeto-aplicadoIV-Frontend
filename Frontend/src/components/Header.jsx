import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Sistema de Doações</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/doacoes">Doações</Link>
        <Link to="/entregas">Entregas</Link>
        <Link to="/catastrofes">Catástrofes</Link>
        <Link to="/usuarios">Usuários</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/logout">Sair</Link>
      </nav>
    </header>
  );
};

export default Header;
