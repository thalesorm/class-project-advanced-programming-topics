const express = require("express");
const router = express.Router();
const user = require("../controllers/usuarioController");

router.get("/", user.listUsuarios);
router.get("/:id", user.getUsuario);
router.post("/", user.createUsuarios);
router.put("/:id", user.updateUsuario);
router.delete("/:id", user.deleteUsuario);
// router.put("/:id", user.updateUsuario);
// router.get("/:id", controller.getUsuario);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// router.get("/", function (req, res, next) {
//   res.status(200).send({
//     title: "Node Express API",
//     version: "0.0.1",
//   });
// });
// module.exports = router;
