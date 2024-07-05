const { StatusCodes } = require("http-status-codes");

const { getAllDivision, createDivision, detailDivision, updateDivision, deleteDivision } = require("../../services//division");

const getAllA = async (req, res, next) => {
  try {
    const result = await getAllDivision(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const createA = async (req, res, next) => {
  console.log(req.body, "req");
  try {
    const result = await createDivision(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const detailA = async (req, res, next) => {
  try {
    const result = await detailDivision(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const updateA = async (req, res, next) => {
  try {
    const result = await updateDivision(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const deleteA = async (req, res, next) => {
  try {
    const result = await deleteDivision(req);
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
