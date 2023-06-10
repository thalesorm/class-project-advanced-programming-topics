const express = require("express");
const router = express.Router();
const emprestimoController = require("../controllers/emprestimoController");

router.get("/", emprestimoController.listEmprestimo);
router.get("/:id", emprestimoController.getEmprestimo);
router.post("/", emprestimoController.createEmprestimo);
router.put("/:id", emprestimoController.updateEmprestimo);
router.delete("/:id", emprestimoController.deleteEmprestimo);

module.exports = router;
