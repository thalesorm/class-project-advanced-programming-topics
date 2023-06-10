const express = require("express");
const router = express.Router();
const autor = require("../controllers/autorController");

router.get("/", autor.listAutor);
router.post("/", autor.createAutor);

module.exports = router;
