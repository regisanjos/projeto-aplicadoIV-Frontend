import React, { useState, useEffect } from 'react';
import './UserManagementPage.css';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulação de dados de usuários
    setUsers([
      { id: 1, username: 'admin', role: 'admin' },
      { id: 2, username: 'doador1', role: 'doador' },
      { id: 3, username: 'afetado1', role: 'afetado' },
    ]);
  }, []);

  return (
    <div className="user-management-page">
      <h1>Gerenciamento de Usuários</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Nome de Usuário</th>
            <th>Papel</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementPage;
