const express = require("express");
const authorRouter = express();
const authorController = require("../controllers/authorController.js");

authorRouter.post("/login", authorController.handleLoginSession);
authorRouter.post("/register", authorController.handleRegister);
authorRouter.get("/logout", authorController.handleLogout);
module.exports = authorRouter;
