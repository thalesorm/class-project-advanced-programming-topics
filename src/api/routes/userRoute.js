const express = require("express");
const router = express.Router();
const user = require("../controllers/usuarioController");

router.get("/", user.listUsuarios);
router.get("/:id", user.getUsuario);
router.post("/", user.createUsuarios);
router.put("/:id", user.updateUsuario);
router.delete("/:id", user.deleteUsuario);


module.exports = router;

