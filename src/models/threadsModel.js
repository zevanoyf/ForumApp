const mongoose = require("mongoose");
const { Schema } = mongoose;
const Users = require("./usersModel.js");

const threadsSchema = new Schema({
  title: String,
  content: String,
  usersId: { type: Schema.Types.ObjectId, ref: Users },
});

const Threads = mongoose.model("Threads", threadsSchema);

module.exports = Threads;
