const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({ username: "bryan~~~" }));
router.get("/group", (req, res) => res.json({ username: "dev group. bryan" }));
router.get("/books", (req, res) => res.json({ username: "r" }));
module.exports = router;
