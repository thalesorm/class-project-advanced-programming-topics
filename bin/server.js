const app = require("../app");
const db = require("../src/database/db"); // Importe a instância do Sequelize
const Usuario = require("../src/database/models/userModel"); // Importe o modelo Usuario

const port = normalizaPort(process.env.PORT || "3030");
function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

// Sincronize os modelos com o banco de dados
db.sync({ force: true })
  .then(() => {
    console.log("Modelos sincronizados com o banco de dados.");
    // Inicie o servidor Express após sincronizar os modelos
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar modelos:", error);
  });

// Rotas e lógica do servidor Express
// ...
// const app = require("../app");
// const db = require("../src/database/db"); // Importe a instância do Sequelize
// // const Usuario = require("../src/database/models/userModel"); // Importe o modelo Usuario

// const port = normalizaPort(process.env.PORT || "3030");
// function normalizaPort(val) {
//   const port = parseInt(val, 10);
//   if (isNaN(port)) {
//     return val;
//   }
//   if (port >= 0) {
//     return port;
//   }
//   return false;
// }

// // Sincronize os modelos com o banco de dados
// db.sync({ force: true })
//   .then(() => {
//     console.log("Modelos sincronizados com o banco de dados.");
//     // ...
//   })
//   .catch((error) => {
//     console.error("Erro ao sincronizar modelos:", error);
//   });

// // Rotas e lógica do servidor Express
// // ...
// app.listen(port, function () {
//   console.log(`app listening on port ${port}`);
// });