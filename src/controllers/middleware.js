const Session = require("../models/sessionModel.js");

async function middleware(req, res, next) {
  //Session
  const sessionId = req.cookies?.session_id;
  if (!sessionId) {
    res.send("Kamu tidak memiliki session sehingga tidak memiliki akses");
  }

  const session = await Session.findOne({ _id: sessionId });

  if (!session) {
    res.send("Kamu tidak memiliki session sehingga tidak memiliki akses");
  }

  next();
}

module.exports = middleware;
