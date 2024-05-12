const express = require("express");
const repliesRouter = express();

repliesRouter.get("/api/replies", (req, res) =>
  res.send("Ini data seluruh replies")
);

module.exports = repliesRouter;
