import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function EditLivro() {
  const { id } = useParams();
  const history = useHistory();
  const [livro, setLivro] = useState({
    titulo: "",
    autor: "",
    anoPub: "",
    isbn: "",
  });

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/livro/${id}`);
        setLivro(response.data);
      } catch (error) {
        console.log("Erro ao buscar o livro:", error);
      }
    };

    fetchLivro();
  }, [id]);

  const handleChange = (e) => {
    setLivro({
      ...livro,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3030/livro/${id}`, livro);
      history.push("/livros");
    } catch (error) {
      console.log("Erro ao editar o livro:", error);
    }
  };

  return (
    <div>
      <h2>Editar Livro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={livro.titulo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="autor">Autor:</label>
          <input
            type="text"
            id="autor"
            name="autor"
            value={livro.autor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="anoPub">Ano de Publicação:</label>
          <input
            type="text"
            id="anoPub"
            name="anoPub"
            value={livro.anoPub}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={livro.isbn}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
