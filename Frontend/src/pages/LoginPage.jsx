import React, {useContext, useState} from "react";
import {AuthContext} from "../context/AuthContext";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password);
    };
    return (
        <div className="login-container">
            <h1>Login</h1>
            <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
            <input type="password"placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
};

export default LoginPage;
            

