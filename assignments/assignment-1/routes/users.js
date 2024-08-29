const path = require("path");
const express = require("express");

const rootDirectory = require("../utils/rootDirectory");
const router = express.Router();

router.get("/users", (req, res) => {
  res.sendFile(path.join(rootDirectory, "views", "users.html"));
});

module.exports = router;
