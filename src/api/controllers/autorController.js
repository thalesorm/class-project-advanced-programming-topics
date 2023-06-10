const Autor = require("../../database/models/autorModel");
const { Op } = require("sequelize");

const autorController = {};

autorController.listAutor = async (req, res) => {
  try {
    const autores = await Autor.findAll();
    res.status(200).json(autores);
  } catch (error) {
    res.status(500).json({ error });
  }
};

autorController.createAutor = async (req, res) => {
  try {
    const { nome } = req.body;
    const autor = await Autor.create({ nome });
    res.status(201).json(autor);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o autor" });
  }
};

module.exports = autorController;
