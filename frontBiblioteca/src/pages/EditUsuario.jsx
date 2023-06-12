import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function EditUsuario({ match }) {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    const userId = match.params.id;
    getUser(userId);
  }, [match.params.id]);

  const getUser = (userId) => {
    axios
      .get(`http://localhost:3030/user/${userId}`)
      .then((res) => {
        setUser(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setLogin(res.data.login);
        setSenha(res.data.senha);
      })
      .catch((err) => {
        setError("Erro ao obter os dados do usuário");
        console.log(err);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name,
      email,
      login,
      senha,
    };

    axios
      .put(`http://localhost:3030/user/${user.id}`, updatedUser)
      .then((res) => {
        console.log("Usuário atualizado com sucesso!");
        // Faça algo após a atualização do usuário, como redirecionar para a tela de lista de usuários
        history.push("/home");
      })
      .catch((err) => {
        setError("Erro ao atualizar o usuário");
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Editar Usuário</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleFormSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Login:
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}
