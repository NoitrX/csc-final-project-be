const bcrypt = require("bcrypt");
const prisma = require("../db");
const { generateToken } = require("../utils/jwt");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  const token = generateToken(user);
  res.status(200).json({ token });
};

module.exports = {
  login,
};
