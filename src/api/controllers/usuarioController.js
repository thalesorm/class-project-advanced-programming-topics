// const { Usuario } = require("../../models");

// const usuarioController = {};

// usuarioController.listUsuarios = async (req, res) => {
//   try {
//     const usuarios = await Usuario.findAll();
//     res.status(200).json(usuarios);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao buscar os usuários" });
//   }
// };

// usuarioController.createUsuario = async (req, res) => {
//   try {
//     const { nome, email, login, senha } = req.body;
//     const usuario = await Usuario.create({ nome, email, login, senha });
//     res.status(201).json(usuario);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao criar o usuário" });
//   }
// };

// usuarioController.getUsuario = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const usuario = await Usuario.findByPk(id);
//     if (usuario) {
//       res.status(200).json(usuario);
//     } else {
//       res.status(404).json({ error: "Usuário não encontrado" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao buscar o usuário" });
//   }
// };

// usuarioController.updateUsuario = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { nome, email, login, senha } = req.body;
//     const usuario = await Usuario.findByPk(id);
//     if (usuario) {
//       usuario.nome = nome;
//       usuario.email = email;
//       usuario.login = login;
//       usuario.senha = senha;
//       await usuario.save();
//       res.status(200).json(usuario);
//     } else {
//       res.status(404).json({ error: "Usuário não encontrado" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao atualizar o usuário" });
//   }
// };

// usuarioController.deleteUsuario = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const usuario = await Usuario.findByPk(id);
//     if (usuario) {
//       await usuario.destroy();
//       res.status(200).json({ message: "Usuário excluído com sucesso" });
//     } else {
//       res.status(404).json({ error: "Usuário não encontrado" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao excluir o usuário" });
//   }
// };

// module.exports = usuarioController;

const Usuario = require("../../database/models/userModel");
const { Op } = require('sequelize'); // Importe o operador de consulta do Sequelize

const usuarioController = {};

usuarioController.listUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json( usuarios );
  } catch (error) {
    res.status(500).json({ error });
  }
};

usuarioController.createUsuarios = async (req, res) => {
  try {
    const { name, email, login, senha } = req.body;
    const usuario = await Usuario.create({ name, email, login, senha  });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o usuário" });
  }
};

usuarioController.getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error });
  }
};

usuarioController.updateUsuario = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID do usuário a ser editado
    const { name, email, login, senha } = req.body;

    // Verifica se o usuário existe no banco de dados
    const editUsuario = await Usuario.findByPk(id);
    if (!editUsuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    // Atualiza os dados do usuário
    editUsuario.name = name;
    editUsuario.email = email;
    editUsuario.login = login;
    editUsuario.senha = senha;
    await editUsuario.save();

    res.status(200).json(editUsuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao editar o usuário" });
  }
};


module.exports = usuarioController;