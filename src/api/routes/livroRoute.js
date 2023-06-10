const express = require("express");
const router = express.Router();
const livro = require ('../controllers/livroController');

router.get("/", livro.listLivro);
router.post("/", livro.createLivro);

// router.get("/:id", controller.getUsuario);
// router.put("/:id", controller.updateUsuario);
// router.delete("/:id", controller.deleteUsuario);

module.exports = router;
