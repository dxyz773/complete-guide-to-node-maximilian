const path = require("path");
const express = require("express");

const rootDirectory = require("../utils/path");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In middleware 1");

  res.sendFile(path.join(rootDirectory, "views", "shop.html"));
});

module.exports = router;
