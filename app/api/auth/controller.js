const { StatusCodes } = require("http-status-codes");

const { login } = require("../../services/auth");

const LoginAuth = async (req, res, next) => {
  try {
    const result = await login(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { LoginAuth };
