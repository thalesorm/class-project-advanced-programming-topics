const Emprestimo = require("../../database/models/emprestimoModel");
const { Op } = require('sequelize'); // Importe o operador de consulta do Sequelize

const emprestimoController = {};

emprestimoController.listEmprestimo = async (req, res) => {
  try {
    const emprestimo = await Emprestimo.findAll();
    res.status(200).json( emprestimo );
  } catch (error) {
    res.status(500).json({ error });
  }
};

emprestimoController.createEmprestimo = async (req, res) => {
  try {
    const { texto, nota } = req.body;
    const emprestimo = await Emprestimo.create({ texto, nota });
    res.status(201).json(emprestimo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o usuário" });
  }
};



module.exports = emprestimoController;