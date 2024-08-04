const express = require("express");
const router = express.Router();
const { getAllA, createA, detailA, updateA, deleteA } = require("../../api/about/controller");
const upload = require("../../middlewares/multer");

router.get("/about", getAllA);
router.get("/about/:id", detailA);
router.post("/about", upload.fields([{ name: "img", maxCount: 1 }]), createA);
router.put("/about/update/:id", upload.fields([{ name: "img", maxCount: 1 }]), updateA);
router.delete("/about/delete/:id", deleteA);

module.exports = router;
