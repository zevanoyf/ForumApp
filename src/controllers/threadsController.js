require("dotenv");
const User = require("../models/usersModel");
const Thread = require("../models/threadsModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getThreads(req, res) {
  const { title, content, usersId } = req.body;

  const newThread = new Thread({
    title,
    content,
    usersId,
  });
  const savedThread = await newThread.save();

  return res.send("Ini data threads");
}

async function createThreads(req, res) {
  const { title, content, usersId } = req.body;

  const newThread = new Thread({
    title,
    content,
    usersId,
  });
  const savedThread = await newThread.save();

  res.status(201).json({ message: "Thread created", data: newThread });
}

module.exports = { getThreads, createThreads };
