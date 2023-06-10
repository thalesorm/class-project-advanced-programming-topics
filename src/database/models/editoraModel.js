const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Editora = sequelize.define("editora", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Editora;
