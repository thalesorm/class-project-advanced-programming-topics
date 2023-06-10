const express = require("express");
const router = express.Router();
const autorController = require('../controllers/autorController')
// const autor = require("../controllers/autorController");

router.get("/", autorController.listAutores);
router.get("/:id", autorController.listAutor)
router.post("/", autorController.createAutor);
router.put("/:id", autorController.updateAutor);
router.delete("/:id", autorController.deleteAutor);


module.exports = router;

// router.get("/", user.listUsuarios);
// router.get("/:id", user.getUsuario);
// router.post("/", user.createUsuarios);
// router.put("/:id", user.updateUsuario);
// router.delete("/:id", user.deleteUsuario);