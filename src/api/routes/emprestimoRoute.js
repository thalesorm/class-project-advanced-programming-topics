const express = require("express");
const router = express.Router();
const emprestimoController = require("../controllers/emprestimoController");

router.get("/", emprestimoController.listEmprestimo);
router.get("/:id", emprestimoController.getEmprestimo);
router.post("/", emprestimoController.createEmprestimo);
router.put("/:id", emprestimoController.updateEmprestimo);
router.delete("/:id", emprestimoController.deleteEmprestimo);

module.exports = router;



// [
//   {
//     id: 1,
//     data: "2001-01-20T23:00:00.000Z",
//     dataDevolucao: "2010-02-20T23:00:00.000Z",
//     createdAt: "2001-01-20T23:00:00.000Z",
//     updatedAt: "2001-01-20T23:00:00.000Z",
//   },
// ];

// {
//   "data": "2000-01-20T23:00:00.000Z",
//   "dataDevolucao": "2010-02-20T23:00:00.000Z"
// }

// {
//   "data": "2023-06-10",
//   "dataDevolucao": "2023-06-10"
// }
