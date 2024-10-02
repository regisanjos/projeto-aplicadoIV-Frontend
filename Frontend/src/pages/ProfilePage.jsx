import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState({
    username: 'admin', // Simulação de dados do usuário logado
    email: 'admin@example.com',
    role: 'admin'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="profile-page">
      <h1>Perfil do Usuário</h1>
      <form>
        <label>Nome de Usuário</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
        <label>Papel</label>
        <input
          type="text"
          name="role"
          value={user.role}
          disabled
        />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default ProfilePage;
