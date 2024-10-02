import React, { useState, useEffect } from 'react';
import './DeliveryManagementPage.css';

const DeliveryManagementPage = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    // Simulação de dados de entregas
    setDeliveries([
      { id: 1, item: 'Alimentos', status: 'Entregue', date: '2024-09-30' },
      { id: 2, item: 'Roupas', status: 'A caminho', date: '2024-10-01' },
      { id: 3, item: 'Materiais de Limpeza', status: 'Pendente', date: '2024-10-02' }
    ]);
  }, []);

  return (
    <div className="delivery-management-page">
      <h1>Gerenciamento de Entregas</h1>
      <table className="delivery-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Status</th>
            <th>Data de Entrega</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr key={delivery.id}>
              <td>{delivery.item}</td>
              <td>{delivery.status}</td>
              <td>{delivery.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryManagementPage;
