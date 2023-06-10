const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Livro = sequelize.define("livro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nota: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Livro;
