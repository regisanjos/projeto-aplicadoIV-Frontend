import React, { useState, useEffect } from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [donations, setDonations] = useState([]);
  const [catastrophes, setCatastrophes] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulando dados do backend
    setDeliveries([
      { id: 1, status: 'Concluída', date: '2024-09-30' },
      { id: 2, status: 'Em andamento', date: '2024-10-01' }
    ]);

    setDonations([
      { id: 1, item: 'Alimentos', quantity: 50 },
      { id: 2, item: 'Roupas', quantity: 30 }
    ]);

    setCatastrophes([
      { id: 1, name: 'Inundação', location: 'Cidade X' },
      { id: 2, name: 'Terremoto', location: 'Cidade Y' }
    ]);

    setUsers([
      { id: 1, role: 'admin', username: 'admin' },
      { id: 2, role: 'doador', username: 'doador1' }
    ]);
  }, []);

  return (
    <div className="dashboard-page">
      <h1>Dashboard Administrativo</h1>
      <div className="dashboard-content">
        <div className="widget">
          <h3>Entregas</h3>
          <ul>
            {deliveries.map(delivery => (
              <li key={delivery.id}>
                {delivery.status} - {delivery.date}
              </li>
            ))}
          </ul>
        </div>
        <div className="widget">
          <h3>Doações</h3>
          <ul>
            {donations.map(donation => (
              <li key={donation.id}>
                {donation.item} - Quantidade: {donation.quantity}
              </li>
            ))}
          </ul>
        </div>
        <div className="widget">
          <h3>Catástrofes</h3>
          <ul>
            {catastrophes.map(catastrophe => (
              <li key={catastrophe.id}>
                {catastrophe.name} - Local: {catastrophe.location}
              </li>
            ))}
          </ul>
        </div>
        <div className="widget">
          <h3>Usuários Ativos</h3>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.username} - {user.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

