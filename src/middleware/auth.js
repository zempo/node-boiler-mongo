const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/globals");

module.exports = async (req, res, next) => {
  // get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token)
    return res
      .status(401)
      .json({ success: false, error: "No token, unauthorized request." });

  try {
    const decoded = await jwt.verify(token, JWT_SECRET);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      error: "Token is not valid"
    });
  }
};
