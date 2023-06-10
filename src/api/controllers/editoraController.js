const Editora = require("../../database/models/editoraModel");

const editoraController = {};

editoraController.listEditoras = async (req, res) => {
  try {
    const editoras = await Editora.findAll();
    res.status(200).json(editoras);
  } catch (error) {
    res.status(500).json({ error });
  }
};

editoraController.getEditora = async (req, res) => {
  try {
    const { id } = req.params;
    const editora = await Editora.findByPk(id);
    if (!editora) {
      return res.status(404).json({ error: "Editora não encontrada" });
    }
    res.status(200).json(editora);
  } catch (error) {
    res.status(500).json({ error });
  }
};

editoraController.createEditora = async (req, res) => {
  try {
    const { name } = req.body;
    const editora = await Editora.create({ name });
    console.log(editora);
    res.status(201).json(editora);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar a editora" });
  }
};


editoraController.updateEditora = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const editora = await Editora.findByPk(id);
    if (!editora) {
      return res.status(404).json({ error: "Editora não encontrada" });
    }

    editora.name = name;
    await editora.save();

    res.status(200).json(editora);
  } catch (error) {
    res.status(500).json({ error: "Erro ao editar a editora" });
  }
};

editoraController.deleteEditora = async (req, res) => {
  try {
    const { id } = req.params;
    const editora = await Editora.findByPk(id);
    if (!editora) {
      return res.status(404).json({ error: "Editora não encontrada" });
    }

    await editora.destroy();

    res.status(200).json({ message: "Editora excluída com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir a editora" });
  }
};

module.exports = editoraController;
