import React, { useState, useEffect } from 'react';
import './CatastropheManagementPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CatastropheManagementPage = () => {
  const [catastrophes, setCatastrophes] = useState([]);
  const [newCatastrophe, setNewCatastrophe] = useState({ name: '', location: '' });

  useEffect(() => {
    // Simulação de dados de catástrofes
    setCatastrophes([
      { id: 1, name: 'Inundação', location: 'Cidade X' },
      { id: 2, name: 'Terremoto', location: 'Cidade Y' },
    ]);
  }, []);

  const handleAddCatastrophe = () => {
    // Adicionar uma nova catástrofe simulada
    setCatastrophes([...catastrophes, { ...newCatastrophe, id: catastrophes.length + 1 }]);
    setNewCatastrophe({ name: '', location: '' });
  };

  return (
    <div className="catastrophe-management-page">
      <h1>Gerenciamento de Catástrofes</h1>
      <table className="catastrophe-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Local</th>
          </tr>
        </thead>
        <tbody>
          {catastrophes.map(catastrophe => (
            <tr key={catastrophe.id}>
              <td>{catastrophe.name}</td>
              <td>{catastrophe.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-catastrophe">
        <h3>Adicionar Nova Catástrofe</h3>
        <input
          type="text"
          placeholder="Nome da Catástrofe"
          value={newCatastrophe.name}
          onChange={e => setNewCatastrophe({ ...newCatastrophe, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Local"
          value={newCatastrophe.location}
          onChange={e => setNewCatastrophe({ ...newCatastrophe, location: e.target.value })}
        />
        <button onClick={handleAddCatastrophe}>Adicionar</button>
      </div>
    </div>
  );
};

export default CatastropheManagementPage;
