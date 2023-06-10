const express = require('express');
const router = express.Router();
const resenha = require ('../controllers/resenhaController');

router.get("/", resenha.listResenha);
router.post("/", resenha.createResenha);

module.exports = router;



// const express = require("express");
// const router = express.Router();
// const controller = require ('../controllers/livroController');

// router.get("/", controller.listLivro);
// router.post("/", controller.createLivro);

// // router.get("/:id", controller.getUsuario);
// // router.put("/:id", controller.updateUsuario);
// // router.delete("/:id", controller.deleteUsuario);

// module.exports = router;
