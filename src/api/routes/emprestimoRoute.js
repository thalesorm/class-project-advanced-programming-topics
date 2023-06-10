const express = require("express");
const router = express.Router();
const emprestimo = require("../controllers/emprestimoController");

router.get("/", emprestimo.listEmprestimo);
router.post("/", emprestimo.createEmprestimo);
// router.get("/:id", controller.getUsuario);
// router.put("/:id", controller.updateUsuario);
// router.delete("/:id", controller.deleteUsuario);

module.exports = router;

