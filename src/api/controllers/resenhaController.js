const Resenha = require("../../database/models/resenhaModel");
const { Op } = require("sequelize"); // Importe o operador de consulta do Sequelize

const resenhaController = {};

resenhaController.listResenha = async (req, res) => {
  try {
    const resnha = await Resenha.findAll();
    res.status(200).json(resnha);
  } catch (error) {
    res.status(500).json({ error });
  }
};

resenhaController.createResenha = async (req, res) => {
  try {
    const { name, email, login, senha } = req.body;
    const resnha = await Resenha.create({ name, email, login, senha });
    res.status(201).json(resnha);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o usuário" });
  }
};

module.exports = resenhaController;
