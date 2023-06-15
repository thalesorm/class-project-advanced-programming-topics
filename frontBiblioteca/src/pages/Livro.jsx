import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link, useHistory } from "react-router-dom";

import "../styles/Livro.css";

export default function Livro() {
  const [livros, setLivros] = useState([]);
  const history = useHistory();

  const fetchLivros = async () => {
    try {
      const response = await axios.get("http://localhost:3030/livro");
      setLivros(response.data);
    } catch (error) {
      console.log("Erro ao buscar os livros:", error);
    }
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  const handleExcluirClick = async (livroId) => {
    try {
      await axios.delete(`http://localhost:3030/livro/${livroId}`);
      fetchLivros();
    } catch (error) {
      console.log("Erro ao excluir o livro:", error);
    }
  };

  return (
    <div>
      <Header />
      <h2>Listagem de Livros</h2>
      {livros.length > 0 ? (
        <div className="livro-card-container">
          {livros.map((livro) => (
            <div className="livro-card" key={livro.id}>
              <div className="livro-info">
                <strong className="titulo-livro">Título:</strong>
                <span className="nome-livro">{livro.titulo}</span>
              </div>
              <div className="livro-info">
                <strong className="autor-livro">Autor:</strong>
                <span className="nome-autor">{livro.autor}</span>
              </div>
              <div className="livro-info">
                <strong className="ano-livro">Ano:</strong>
                <span className="ano-pub-livro">{livro.anoPub}</span>
              </div>
              <div className="livro-info">
                <strong className="isbn-livro">ISBN:</strong>
                <span className="livro-info">{livro.isbn}</span>
              </div>
              <div className="botoes-livro">
                <Link
                  to={`/edit-livro/${livro.id}`}
                  className="editar-button-livro"
                >
                  Editar
                </Link>
                <button
                  className="excluir-button-livro"
                  onClick={() => handleExcluirClick(livro.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum livro cadastrado.</p>
      )}
      <button onClick={() => history.push("/cadastrar-livros")}>
        Cadastrar Livro
      </button>
    </div>
  );
}
