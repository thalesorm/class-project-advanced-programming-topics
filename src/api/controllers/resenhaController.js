const Resenha = require("../../database/models/resenhaModel");

const listResenhas = async (req, res) => {
  try {
    const resenhas = await Resenha.findAll();
    res.status(200).json(resenhas);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createResenha = async (req, res) => {
  try {
    const { texto, nota } = req.body;
    const resenha = await Resenha.create({ texto, nota });
    res.status(201).json(resenha);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar a resenha" });
  }
};

const getResenha = async (req, res) => {
  try {
    const { id } = req.params;
    const resenha = await Resenha.findByPk(id);
    res.status(200).json(resenha);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateResenha = async (req, res) => {
  try {
    const { id } = req.params;
    const { texto, nota } = req.body;

    const resenhaToUpdate = await Resenha.findByPk(id);
    if (!resenhaToUpdate) {
      return res.status(404).json({ error: "Resenha não encontrada" });
    }

    resenhaToUpdate.texto = texto;
    resenhaToUpdate.nota = nota;
    await resenhaToUpdate.save();

    res.status(200).json(resenhaToUpdate);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar a resenha" });
  }
};

const deleteResenha = async (req, res) => {
  try {
    const { id } = req.params;

    const resenha = await Resenha.findByPk(id);
    if (!resenha) {
      return res.status(404).json({ error: "Resenha não encontrada" });
    }

    await resenha.destroy();

    res.status(200).json({ message: "Resenha excluída com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir a resenha" });
  }
};

module.exports = {
  listResenhas,
  createResenha,
  getResenha,
  updateResenha,
  deleteResenha,
};
