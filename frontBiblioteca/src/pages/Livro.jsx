import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Livro() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      try {
        const response = await axios.get("http://localhost:3030/livro");
        setLivros(response.data);
      } catch (error) {
        console.log("Erro ao buscar os livros:", error);
      }
    }

    fetchLivros();
  }, []);

  return (
    <div>
      <h2>Listagem de Livros</h2>
      {livros.length > 0 ? (
        <ul>
          {livros.map((livro) => (
            <li key={livro.id}>
              <strong>Título:</strong> {livro.titulo}, <strong>Ano:</strong>{" "}
              {livro.ano}, <strong>ISBN:</strong> {livro.isbn}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum livro cadastrado.</p>
      )}
    </div>
  );
}
