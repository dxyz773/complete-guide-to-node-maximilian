const path = require("path");
const express = require("express");

const rootDirectory = require("../utils/rootDirectory");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDirectory, "views", "index.html"));
});

module.exports = router;
