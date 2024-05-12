const mongoose = require("mongoose");
const { Schema } = mongoose;
const Users = require("./usersModel.js");
const Threads = require("./threadsModel.js");

const repliesSchema = new Schema({
  name: String,
  authorId: String,
  usersId: { type: Schema.Types.ObjectId, ref: Users },
  threadsId: { type: Schema.Types.ObjectId, ref: Threads },
});

const Replies = mongoose.model("Replies", repliesSchema);

module.exports = Replies;
