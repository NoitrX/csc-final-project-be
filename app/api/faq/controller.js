const { StatusCodes } = require("http-status-codes");

const { getAllFaq, createFaq, detailFaq, updateFaq, deleteFaq } = require("../../services/faq");

const getAllA = async (req, res, next) => {
  try {
    const result = await getAllFaq(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const createA = async (req, res, next) => {
  try {
    const result = await createFaq(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const detailA = async (req, res, next) => {
  try {
    const result = await detailFaq(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const updateA = async (req, res, next) => {
  try {
    const result = await updateFaq(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const deleteA = async (req, res, next) => {
  try {
    const result = await deleteFaq(req);
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
