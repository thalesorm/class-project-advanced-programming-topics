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
