const Sequelize = require("sequelize");
const sequelize = new Sequelize("banco-Fat", "root", "senha-mysql", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
