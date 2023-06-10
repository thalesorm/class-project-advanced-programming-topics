const express = require("express");
const router = express.Router();
const editoraController = require("../controllers/editoraController");

router.get("/", editoraController.listEditoras);
router.get("/:id", editoraController.getEditora);
router.post("/", editoraController.createEditora);
router.put("/:id", editoraController.updateEditora);
router.delete("/:id", editoraController.deleteEditora);

module.exports = router;
