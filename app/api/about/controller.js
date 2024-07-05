const { StatusCodes } = require("http-status-codes");

const { getAllAbout, createAbout, detailAbout, updateAbout, deleteAbout } = require("../../services/about");

const getAllA = async (req, res, next) => {
  try {
    const result = await getAllAbout(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const createA = async (req, res, next) => {
  try {
    const result = await createAbout(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const detailA = async (req, res, next) => {
  try {
    const result = await detailAbout(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const updateA = async (req, res, next) => {
  try {
    const result = await updateAbout(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const deleteA = async (req, res, next) => {
  try {
    const result = await deleteAbout(req);
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
