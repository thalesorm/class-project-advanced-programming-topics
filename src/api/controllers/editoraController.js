const Editora = require("../../database/models/editoraModel");
const { Op } = require("sequelize");

const editoraController = {};

editoraController.listEditora = async (req, res) => {
  try {
    const editoras = await Editora.findAll();
    res.status(200).json(editoras);
  } catch (error) {
    res.status(500).json({ error });
  }
};

editoraController.createEditora = async (req, res) => {
  try {
    const { name } = req.body;
    const editora = await Editora.create({ name });
    res.status(201).json(editora);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar a editora" });
  }
};

module.exports = editoraController;
