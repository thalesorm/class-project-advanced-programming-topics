const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Resenha = sequelize.define("resenha", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  texto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nota: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Resenha;
