const Emprestimo = require("../../database/models/emprestimoModel");

const listEmprestimo = async (req, res) => {
  try {
    const emprestimos = await Emprestimo.findAll();
    res.status(200).json(emprestimos);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getEmprestimo = async (req, res) => {
  try {
    const { id } = req.params;
    const emprestimo = await Emprestimo.findByPk(id);
    if (!emprestimo) {
      return res.status(404).json({ error: "Empréstimo não encontrado" });
    }
    res.status(200).json(emprestimo);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateEmprestimo = async (req, res) => {
  try {
    const { id } = req.params;
    const { texto, nota } = req.body;

    const emprestimo = await Emprestimo.findByPk(id);
    if (!emprestimo) {
      return res.status(404).json({ error: "Empréstimo não encontrado" });
    }

    emprestimo.texto = texto;
    emprestimo.nota = nota;
    await emprestimo.save();

    res.status(200).json(emprestimo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o empréstimo" });
  }
};

const deleteEmprestimo = async (req, res) => {
  try {
    const { id } = req.params;
    const emprestimo = await Emprestimo.findByPk(id);
    if (!emprestimo) {
      return res.status(404).json({ error: "Empréstimo não encontrado" });
    }

    await emprestimo.destroy();

    res.status(200).json({ message: "Empréstimo excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o empréstimo" });
  }
};

const createEmprestimo = async (req, res) => {
  try {
    const { texto, nota } = req.body;
    const emprestimo = await Emprestimo.create({ texto, nota });
    res.status(201).json(emprestimo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o empréstimo" });
  }
};

module.exports = {
  listEmprestimo,
  getEmprestimo,
  updateEmprestimo,
  deleteEmprestimo,
  createEmprestimo,
};
