const express = require("express");
const router = express.Router();
const { getAllA, createA, detailA, updateA, deleteA } = require("../../api/join_us/controller");

router.get("/join_us", getAllA);
router.get("/join_us/:id", detailA);
router.post("/join_us", createA);
router.put("/join_us/update/:id", updateA);
router.delete("/join_us/delete/:id", deleteA);

module.exports = router;
