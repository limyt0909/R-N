const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.json({
    username: "1",
    textname: "text",
    writername: "용택",
    datetime: "2021-02-25",
  })
);
router.get("/text", (req, res) => res.json({ textname: "text" }));
router.get("/writer", (req, res) => res.json({ writername: "용택" }));
router.get("/datetime", (req, res) => res.json({ datetime: "2021-02-25" }));

module.exports = router;
