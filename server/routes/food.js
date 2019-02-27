const express = require("express");
const router = express.Router();
let pgResource = require("../api/pg-resource");

// GET request for '/food/'
router.get("/", async (req, res, next) => {
  const result = await pgResource.getAllFood();
  res.send(result);
});

module.exports = router;
