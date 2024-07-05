const express = require("express");
const router = express.Router();
const { getAllA, createA, updateA, deleteA } = require("../../api/event_detail/controller");

router.get("/event_details", getAllA);
router.post("/event_details", createA);
router.put("/event_details/update/:id", updateA);
router.delete("/event_details/delete/:id", deleteA);

module.exports = router;
