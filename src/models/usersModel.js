const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
