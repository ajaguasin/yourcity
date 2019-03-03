const express = require("express");
const router = express.Router();
let pgResource = require("../api/pg-resource");

// GET request for '/food/'
router.get("/", async (req, res, next) => {
  const result = await pgResource.getAllFood();
  res.send(result);
});

router.get("/:cuisine/:type", async (req, res, next) => {
  const result = await pgResource.getFoodByQuery(
    req.params.cuisine,
    req.params.type
  );
  res.send(result);
});

module.exports = router;
