import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import "../styles/Home.css";

const ERROR = "Ops, temos um problema:";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:3030/user")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(ERROR, err));
  };
    const history = useHistory();

   const handleCadastroClick = () => {
     history.push("/cadastro");
   };

  return (
    <main>
      <Header />
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Login: {user.login}</p>
            <p>Senha: {user.senha}</p>
            <Link to={`/edit-usuario/${user.id}`} className="edit-button">
              Editar
            </Link>
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
