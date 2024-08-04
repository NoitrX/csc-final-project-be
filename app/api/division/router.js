const express = require("express");
const router = express.Router();
const { getAllA, createA, detailA, updateA, deleteA } = require("../../api/division/controller");
const upload = require("../../middlewares/multer");

router.get("/division", getAllA);
router.get("/division/:id", detailA);
router.post("/division", upload.fields([{ name: "image_division", maxCount: 1 }]), createA);
router.put("/division/update/:id", upload.fields([{ name: "image_division", maxCount: 1 }]), updateA);
router.delete("/division/delete/:id", deleteA);

module.exports = router;
