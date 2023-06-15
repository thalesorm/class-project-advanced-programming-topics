import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../styles/Header.css";

function Header() {
  const { userName } = useContext(UserContext);

  return (
    <header>
      <Link to="/home">
        <button>Usuários</button>
      </Link>
      <Link to="/livros">
        <button>Livros</button>
      </Link>
      <button>Empréstimos</button>
      <span>
        {userName ? `${userName} bem-vindo(a)` : "Biblioteca online"}
      </span>
    </header>
  );
}

export default Header;
