const express = require("express");
const router = express.Router();
const editora = require("../controllers/editoraController");

router.get("/", editora.listEditora);
router.post("/", editora.createEditora);

module.exports = router;
