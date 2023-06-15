import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/CadastroUser.css";

const ERROR = "Ops, temos um problema:";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      login,
      senha,
    };

    axios
      .post("http://localhost:3030/user", newUser)
      .then((res) => {
        console.log("Usuário cadastrado com sucesso!");
        setName("");
        setEmail("");
        setLogin("");
        setSenha("");
        history.push("/home");
      })
      .catch((err) => console.log(ERROR, err));
  };

  return (
    <div className="main-cadastro">
      <h2 className="title-cadastro">Cadastro de Usuário</h2>
      <form onSubmit={handleFormSubmit} className="form-cadastro">
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-cadastro"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-cadastro"
          />
        </label>
        <label>
          Login:
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="input-cadastro"
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="input-cadastro"
          />
        </label>
        <button type="submit" className="button-cadastro">
          Cadastrar
        </button>
      </form>
      <button onClick={() => history.push("/home")} className="button-cadastro">
        Voltar para a tela inicial
      </button>
    </div>
  );
}
