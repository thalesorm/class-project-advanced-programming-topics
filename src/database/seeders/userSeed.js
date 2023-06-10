const Usuario = require("../models/userModel");
// const sequelize = require("../db");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usuarios = [
      {
        name: "Usuário 1",
        email: "usuario1@example.com",
        login: "usuario1",
        senha: "123456",
      },
      {
        name: "Usuário 2",
        email: "usuario2@example.com",
        login: "usuario2",
        senha: "abcdef",
      },
      {
        name: "Usuário 3",
        email: "usuario3@example.com",
        login: "usuario3",
        senha: "qwerty",
      },
      {
        name: "Usuário 4",
        email: "usuario4@example.com",
        login: "usuario4",
        senha: "987654",
      },
      {
        name: "Usuário 5",
        email: "usuario5@example.com",
        login: "usuario5",
        senha: "xyz123",
      },
    ];

    // Criação dos usuários usando o modelo Usuario
    await Usuario.bulkCreate(usuarios);

    // Ajuste automático dos IDs após a inserção
    await queryInterface.sequelize.query(
      "ALTER TABLE `users` AUTO_INCREMENT = 1;"
    );
  },

  down: async (queryInterface, Sequelize) => {
    // Exclusão de todos os usuários criados
    await Usuario.destroy({ truncate: true });
  },
};
