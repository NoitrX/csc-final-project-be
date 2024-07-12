const express = require("express");
const router = express.Router();

const { LoginAuth } = require("../../api/auth/controller");

router.post("/login", LoginAuth);

module.exports = router;
