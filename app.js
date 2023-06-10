const express = require("express");
const app = express();
const path = require('path');
// const db = require('./src/database/db')

// Configuração do Sequelize CLI
// require('dotenv').config({ path: path.resolve(__dirname, 'src/database/config/.env') });

// Middlewares
app.use(express.json());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Rotas
const userRoute = require("./src/api/routes/userRoute");
const emprestimoRoute = require("./src/api/routes/emprestimoRoute")
const livroRoute = require("./src/api/routes/livroRoute")
const resenhaRoute = require("./src/api/routes/resenhaRoute");
const editoraRoute = require("./src/api/routes/editoraRoute");
const autorRoute = require("./src/api/routes/autorRoute");

app.use("/user", userRoute);
app.use("/emprestimo", emprestimoRoute);
app.use("/livro", livroRoute);
app.use("/resenha", resenhaRoute);
app.use("/editora", resenhaRoute);
app.use("/autor", autorRoute);

module.exports = app;
