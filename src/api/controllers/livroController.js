const livroModel = require("../../database/models/livroModel");

const listLivros = async (req, res) => {
  try {
    const livros = await livroModel.findAll();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getLivro = async (req, res) => {
  try {
    const { id } = req.params;
    const livro = await livroModel.findByPk(id);
    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createLivro = async (req, res) => {
  try {
    const { text, nota } = req.body;
    const livro = await livroModel.create({ text, nota });
    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o livro" });
  }
};

const updateLivro = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, nota } = req.body;

    const updateLivro = await livroModel.findByPk(id);
    if (!updateLivro) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    updateLivro.text = text;
    updateLivro.nota = nota;
    await updateLivro.save();

    res.status(200).json(updateLivro);
  } catch (error) {
    res.status(500).json({ error: "Erro ao editar o livro" });
  }
};

const deleteLivro = async (req, res) => {
  try {
    const { id } = req.params;

    const livro = await livroModel.findByPk(id);
    if (!livro) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    await livro.destroy();

    res.status(200).json({ message: "Livro excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o livro" });
  }
};

module.exports = {
  listLivros,
  createLivro,
  getLivro,
  updateLivro,
  deleteLivro,
};
