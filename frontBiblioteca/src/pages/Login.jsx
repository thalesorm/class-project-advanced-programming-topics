import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/Login.css"

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3030/user");

      const users = response.data;

      const authenticatedUser = users.find(
        (user) => user.login === login && user.senha === senha
      );

      if (authenticatedUser) {
        console.log("Usuário autenticado!");
        history.push("/home");
      } else {
        setErrorMessage("Login ou senha incorretos");
      }
    } catch (error) {
      console.log("Erro ao autenticar usuário:", error);
    }

    setLogin("");
    setSenha("");
  };

  return (
    <main className="main-login">
      <h1 className="title-login">Login</h1>
      <form className="form-login" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="input-login"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          type="password"
          className="input-login"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="button-login" type="submit">Entrar</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </main>
  );
}

export default Login;
