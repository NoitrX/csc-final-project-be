const { StatusCodes } = require("http-status-codes");

const { getAllJoinUs, createJoinUs, detailJoinUs, updateJoinUs, deleteJoinUs } = require("../../services/join_us");

const getAllA = async (req, res, next) => {
  try {
    const result = await getAllJoinUs(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const createA = async (req, res, next) => {
  console.log(req.body, "req");
  try {
    const result = await createJoinUs(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const detailA = async (req, res, next) => {
  try {
    const result = await detailJoinUs(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const updateA = async (req, res, next) => {
  try {
    const result = await updateJoinUs(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const deleteA = async (req, res, next) => {
  try {
    const result = await deleteJoinUs(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllA,
  createA,
  detailA,
  updateA,
  deleteA,
};
