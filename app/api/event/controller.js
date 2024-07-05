const { StatusCodes } = require("http-status-codes");

const { getAllEvent, createEvent, detailEvent, updateEvent, deleteEvent } = require("../../services/event");

const getAllA = async (req, res, next) => {
  try {
    const result = await getAllEvent(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const createA = async (req, res, next) => {
  console.log(req.body, "req");
  try {
    const result = await createEvent(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const detailA = async (req, res, next) => {
  try {
    const result = await detailEvent(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const updateA = async (req, res, next) => {
  try {
    const result = await updateEvent(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const deleteA = async (req, res, next) => {
  try {
    const result = await deleteEvent(req);
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
