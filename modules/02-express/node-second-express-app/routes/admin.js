const path = require("path");
const express = require("express");
const rootDirectory = require("../utils/path");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDirectory, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
