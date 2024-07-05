const express = require("express");
const router = express.Router();
const { getAllA, createA, detailA, updateA, deleteA } = require("../../api/division/controller");

router.get("/division", getAllA);
router.get("/division/:id", detailA);
router.post("/division", createA);
router.put("/division/update/:id", updateA);
router.delete("/division/delete/:id", deleteA);

module.exports = router;
