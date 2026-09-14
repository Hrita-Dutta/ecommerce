require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const db = require("./database/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// DB connection
db();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);

// server listening
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
