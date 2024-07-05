const express = require("express");
const router = express.Router();
const { getAllA, createA, detailA, updateA, deleteA } = require("../../api/faq/controller");

router.get("/faq", getAllA);
router.get("/faq/:id", detailA);
router.post("/faq", createA);
router.put("/faq/update/:id", updateA);
router.delete("/faq/delete/:id", deleteA);

module.exports = router;
