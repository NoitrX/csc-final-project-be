const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "mysecret";

const generateToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error("Invalid Token");
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
