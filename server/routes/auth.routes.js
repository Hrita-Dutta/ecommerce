const router = require("express").Router();
const { registerUser } = require("../controllers/auth/auth.controller");

router.post("/register", registerUser);

module.exports = router;
