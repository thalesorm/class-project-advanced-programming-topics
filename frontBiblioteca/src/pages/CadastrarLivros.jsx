import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function CadastrarLivros() {
  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState("");
  const [isbn, setIsbn] = useState("");
  const [mensagem, setMensagem] = useState("");
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const novoLivro = {
      titulo,
      ano,
      isbn,
    };

    try {
      await axios.post("http://localhost:3030/livro", novoLivro);

      setMensagem("Livro cadastrado com sucesso!");
      setTitulo("");
      setAno("");
      setIsbn("");
    } catch (error) {
      console.log("Erro ao cadastrar o livro:", error);
      setMensagem(
        "Ocorreu um erro ao cadastrar o livro. Por favor, tente novamente."
      );
    }
  };

  return (
    <div>
      <h2>Cadastrar Livros</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          Ano:
          <input
            type="text"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </label>
        <label>
          ISBN:
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
      <button onClick={() => history.push("/livros")}>
        Voltar para a Listagem
      </button>
    </div>
  );
}
