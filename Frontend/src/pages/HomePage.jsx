import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bem-vindo ao Sistema de Doações</h1>
      <p>
        Este sistema facilita o gerenciamento de doações, entregas e catástrofes,
        ajudando a conectar doadores e instituições que ajudam as pessoas afetadas por catástrofes.
      </p>
      <Link to="/login">Faça Login</Link>
    </div>
  );
};

export default HomePage;

