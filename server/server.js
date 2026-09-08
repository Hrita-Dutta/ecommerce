require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const db = require("./database/db");

const app = express();
const PORT = process.env.PORT || 5000;

db();

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
