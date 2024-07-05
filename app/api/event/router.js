const express = require("express");
const router = express.Router();
const { getAllA, createA, detailA, updateA, deleteA } = require("../../api/event/controller");

router.get("/event", getAllA);
router.get("/event/:id", detailA);
router.post("/event", createA);
router.put("/event/update/:id", updateA);
router.delete("/event/delete/:id", deleteA);

module.exports = router;
