const mongoose = require("mongoose");
const { Schema } = mongoose;
const Users = require("./usersModel.js");

const sessionSchema = new Schema({
  usersId: { type: Schema.Types.ObjectId, ref: Users },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
