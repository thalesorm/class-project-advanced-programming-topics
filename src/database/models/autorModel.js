const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Autor = sequelize.define("autor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Autor;
