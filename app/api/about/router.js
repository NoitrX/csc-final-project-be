const express = require("express");
const router = express.Router();
const { getAllA, createA, detailA, updateA, deleteA } = require("../../api/about/controller");

router.get("/about", getAllA);
router.get("/about/:id", detailA);
router.post("/about", createA);
router.put("/about/update/:id", updateA);
router.delete("/about/delete/:id", deleteA);

module.exports = router;
