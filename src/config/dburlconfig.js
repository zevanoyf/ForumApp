require("dotenv").config();

const MONGO_DB_URL =
  process.env.NODE_ENV === "development"
    ? process.MONGODB_URI_DEV
    : process.MONGODB_URI_DEV;

module.exports = MONGO_DB_URL;
