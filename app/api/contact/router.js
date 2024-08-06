const express = require("express");
const router = express.Router();
const { getAllA, createA, updateA, deleteA } = require("../../api/contact/controller");
const upload = require("../../middlewares/multer");

router.get("/contact", getAllA);
router.post("/contact", upload.fields([{ name: "img", maxCount: 1 }]), createA);
router.put("/contact/update/:id", upload.fields([{ name: "img", maxCount: 1 }]), updateA);
router.delete("/contact/delete/:id", deleteA);

module.exports = router;
