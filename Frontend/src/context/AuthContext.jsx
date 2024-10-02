import React, { createContext, useState, useContext } from "react";
 
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AutProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            // Simulando uma chamada à API de login
            const response = await fetch('/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
      
            if (data.token) {
              localStorage.setItem('token', data.token); // Armazenar o token JWT
              setUser({ username: data.username, role: data.role });
              return true;
            } else {
              return false;
            }
          } catch (err) {
            console.error("Erro no login", err);
            return false;
          }
        };
      
        const logout = () => {
          localStorage.removeItem('token');
          setUser(null);
        };
      
        return (
          <AuthContext.Provider value={{ user, login, logout }}>
            {children}
          </AuthContext.Provider>
        );
      };