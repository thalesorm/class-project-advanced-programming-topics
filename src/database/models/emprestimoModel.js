const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Emprestimo = sequelize.define("emprestimo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataDevolucao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Emprestimo;
