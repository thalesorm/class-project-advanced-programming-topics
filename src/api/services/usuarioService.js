const { Usuario } = require("../../database/models/userModel");

const usuarioService = {};

usuarioService.listUsuarios = async () => {
  try {
    const usuarios = await Usuario.findAll();
    return usuarios;
  } catch (error) {
    throw new Error("Erro ao buscar os usuários");
  }
};

usuarioService.createUsuario = async (nome, email, login, senha) => {
  try {
    const usuario = await Usuario.create({ nome, email, login, senha });
    return usuario;
  } catch (error) {
    throw new Error("Erro ao criar o usuário");
  }
};

usuarioService.getUsuario = async (id) => {
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      return usuario;
    } else {
      throw new Error("Usuário não encontrado");
    }
  } catch (error) {
    throw new Error("Erro ao buscar o usuário");
  }
};

usuarioService.updateUsuario = async (id, nome, email, login, senha) => {
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      usuario.nome = nome;
      usuario.email = email;
      usuario.login = login;
      usuario.senha = senha;
      await usuario.save();
      return usuario;
    } else {
      throw new Error("Usuário não encontrado");
    }
  } catch (error) {
    throw new Error("Erro ao atualizar o usuário");
  }
};

usuarioService.deleteUsuario = async (id) => {
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      await usuario.destroy();
      return { message: "Usuário excluído com sucesso" };
    } else {
      throw new Error("Usuário não encontrado");
    }
  } catch (error) {
    throw new Error("Erro ao excluir o usuário");
  }
};

module.exports = usuarioService;
