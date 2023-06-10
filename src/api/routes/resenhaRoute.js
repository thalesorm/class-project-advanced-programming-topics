const express = require("express");
const router = express.Router();
const resenhaController = require("../controllers/resenhaController");

router.get("/", resenhaController.listResenhas);
router.post("/", resenhaController.createResenha);
router.get("/:id", resenhaController.getResenha);
router.put("/:id", resenhaController.updateResenha);
router.delete("/:id", resenhaController.deleteResenha);

module.exports = router;
