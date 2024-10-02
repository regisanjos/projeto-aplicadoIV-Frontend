import React, { useState, useEffect } from 'react';
import './DonationManagementPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DonationManagementPage = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Simulação de dados de doações
    setDonations([
      { id: 1, item: 'Alimentos', quantity: 50, status: 'Entregue' },
      { id: 2, item: 'Roupas', quantity: 30, status: 'A caminho' },
      { id: 3, item: 'Materiais de Limpeza', quantity: 20, status: 'Pendente' }
    ]);
  }, []);

  return (
    <div className="donation-management-page">
      <h1>Gerenciamento de Doações</h1>
      <table className="donation-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {donations.map(donation => (
            <tr key={donation.id}>
              <td>{donation.item}</td>
              <td>{donation.quantity}</td>
              <td>{donation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationManagementPage;
