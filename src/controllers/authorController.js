require("dotenv");
const User = require("../models/usersModel");
const session = require("../models/sessionModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleLoginJWT(req, res) {
  const { email, password } = req.body;
  //1. Cari user berdasarkan email
  const user = await User.findOne({ email });
  if (!user) res.status(404).json({ message: "Account not found" });

  //2. Cocokan password user
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) res.status(403).json({ message: "Invalid Password" });

  //3. Buat payload/body untuk token
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  //4. Generate token
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });

  //5. Set token ke cookie user
  res.cookie("token", token).json({ message: "Login Success!", user: payload });
}

async function handleLoginSession(req, res) {
  const { email, password } = req.body;

  //1. Cari user berdasarkan email
  const user = await User.findOne({ email });
  if (!user) res.status(404).json({ message: "Account not found" });

  //2. Cocokan password user
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) res.status(403).json({ message: "Invalid Password" });

  //3. Insert into ID Session
  const newSession = new Session({
    usersId: user.id,
  });
  const session = await newSession.save();

  //4. Send Session ID
  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  res
    .cookies("session_id", session.id)
    .json({ message: "Login Success!", user: userData });
}

async function handleRegister(req, res) {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  const user = await newUser.save();

  res.status(201).json({ message: "Register Success", data: user });
}

async function handleLogout(req, res) {
  //Delete session from DB
  const session_id = req.cookies?.session_id;

  await Session.findByIdAndDelete(session_id);

  return res.send("Logout Success!");
}

module.exports = {
  handleLoginJWT,
  handleLoginSession,
  handleRegister,
  handleLogout,
};
