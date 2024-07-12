const express = require("express");
const router = express.Router();
const { getAllA, createA, detailA, updateA, deleteA } = require("../../api/about/controller");
const upload = require("../../middlewares/multer");

router.get("/contact", getAllA);
router.get("/contact/:id", detailA);
router.post(
  "/contact",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "title_img", maxCount: 1 },
  ]),
  createA
);
router.put("/contact/update/:id", updateA);
router.delete("/contact/delete/:id", deleteA);

module.exports = router;
