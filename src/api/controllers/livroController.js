const Livro = require("../../database/models/livroModel");
const { Op } = require("sequelize"); // Importe o operador de consulta do Sequelize

const livroController = {};

livroController.listLivro = async (req, res) => {
  try {
    const livro = await Livro.findAll();
    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ error });
  }
};

livroController.createLivro = async (req, res) => {
  try {
    const { text, nota } = req.body;
    const livro = await Livro.create({ text, nota });
    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o usuário" });
  }
};

module.exports = livroController;

