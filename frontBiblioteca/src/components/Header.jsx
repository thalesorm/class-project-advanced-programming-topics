import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <Link to="/home">
        <button>Usuários</button>
      </Link>
      <Link to="/livros">
        <button>Livros</button>
      </Link>
      <button>Empréstimos</button>
    </header>
  );
}

export default Header;
