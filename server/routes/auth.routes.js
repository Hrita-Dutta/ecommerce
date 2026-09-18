const router = require("express").Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth/auth.controller");

router.post("/register", registerUser);
router.post("/register", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
