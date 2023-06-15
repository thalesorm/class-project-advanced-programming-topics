import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import "../styles/Home.css";

const ERROR = "Ops, temos um problema:";

function Home() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:3030/user")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(ERROR, err));
  };

  const handleCadastroClick = () => {
    history.push("/cadastro");
  };

  const handleExcluirClick = (userId) => {
    axios
      .delete(`http://localhost:3030/user/${userId}`)
      .then(() => {
        getUsers();
      })
      .catch((err) => console.log(ERROR, err));
  };

  const handleEditarClick = (userId) => {
    history.push(`/edit-usuario/${userId}`);
  };

  return (
    <main>
      <Header />
      <h1>Lista de Usuários</h1>
      <ul className="ul-usuarios">
        {users.map((user) => (
          <li key={user.id} className="li-usuarios">
            <p>
              <span className="card-label">Nome:</span> {user.name}
            </p>
            <p>
              <span className="card-label">Email:</span> {user.email}
            </p>
            <p>
              <span className="card-label">Login:</span> {user.login}
            </p>
            <p>
              <span className="card-label">Senha:</span> {user.senha}
            </p>
            <button
              className="card-button edit-button-user"
              onClick={() => handleEditarClick(user.id)}
            >
              Editar
            </button>
            <button
              className="card-button delete-button-user"
              onClick={() => handleExcluirClick(user.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
      <button className="button-cadastro-usuario" onClick={handleCadastroClick}>
        Cadastrar
      </button>
    </main>
  );
}

export default Home;
