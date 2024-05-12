const express = require("express");
const threadsRouter = express();
const threadsController = require("../controllers/threadsController.js");

threadsRouter.get("api/threads", threadsController.threadsGet);
// threadsRouter.post("api/threads", threadsController.threadsPost);

module.exports = threadsRouter;
