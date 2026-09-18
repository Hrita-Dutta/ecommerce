const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.userInfo = decodedToken;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });
  }
};

module.exports = authMiddleware;
