const autorModel = require("../../database/models/autorModel");
const { Op } = require("sequelize");


const listAutores = async (req, res) => {
  try {
    const autores = await autorModel.findAll();
    res.status(200).json(autores);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const listAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const autor = await autorModel.findByPk(id);
    res.status(200).json(autor);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createAutor = async (req, res) => {
  try {
    const { name } = req.body;
    const autor = await autorModel.create({ name });
    res.status(201).json(autor);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o autor" });
  }
};

const updateAutor = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID do autor a ser editado
    const { name } = req.body;

    // Verifica se o autor existe no banco de dados
    const updateAutora = await autorModel.findByPk(id);
    if (!updateAutora) {
      return res.status(404).json({ error: "Autor não encontrado" });
    }

    // Atualiza os dados do autor
    updateAutora.name = name;
    await updateAutora.save();

    res.status(200).json(updateAutora);
  } catch (error) {
    res.status(500).json({ error: "Erro ao editar o autor" });
  }
};

const deleteAutor = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID do autor a ser excluído

    // Verifica se o autor existe no banco de dados
    const autor = await autorModel.findByPk(id);
    if (!autor) {
      return res.status(404).json({ error: "Autor não encontrado" });
    }

    // Exclui o autor do banco de dados
    await autor.destroy();

    res.status(200).json({ message: "Autor excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o autor" });
  }
};


module.exports = {
  listAutores,
  createAutor,
  listAutor,
  updateAutor,
  deleteAutor,
};


