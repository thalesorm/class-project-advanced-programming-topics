const express = require("express");
const router = express.Router();
const user = require("../controllers/usuarioController");

router.get("/", user.listUsuarios);
router.get("/:id", user.getUsuario);
router.post("/", user.createUsuarios);
router.put("/:id", user.updateUsuario);
// router.get("/:id", controller.getUsuario);
// router.put("/:id", controller.updateUsuario);
// router.delete("/:id", controller.deleteUsuario);

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
