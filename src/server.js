const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const middleware = require("./controllers/middleware.js");
const app = express();

const authorRouter = require("./routers/authorRouter.js");
const threadsRouter = require("./routers/threadsRouter.js");
const repliesRouter = require("./routers/repliesRouter.js");
const MONGO_DB_URL = require("./config/dburlconfig.js");

mongoose.connect(MONGO_DB_URL);

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", middleware);

//Routers
app.use(authorRouter);
app.use(threadsRouter);
app.use(repliesRouter);

app.listen(8000);
