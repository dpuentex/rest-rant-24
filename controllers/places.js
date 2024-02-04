const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET placeslist");
});

//Makes places route here

module.exports = router;
