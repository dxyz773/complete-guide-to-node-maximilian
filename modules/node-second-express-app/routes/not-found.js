const path = require("path");
const express = require("express");
const rootDirectory = require("../utils/path");

const router = express.Router();

router.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDirectory, "views", "not-found.html"));
});

module.exports = router;
