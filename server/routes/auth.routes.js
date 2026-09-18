const router = require("express").Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth/auth.controller");
const authMiddleware = require("../middleware/auth-middleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.userInfo;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user: user,
  });
});

module.exports = router;
