const { StatusCodes } = require("http-status-codes");

const { getAllEventDetail, createEventDetail, updateEventDetail, deleteEventDetail } = require("../../services/event_details");

const getAllA = async (req, res, next) => {
  try {
    const result = await getAllEventDetail(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const createA = async (req, res, next) => {
  console.log(req.body, "req");
  try {
    const result = await createEventDetail(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const updateA = async (req, res, next) => {
  try {
    const result = await updateEventDetail(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const deleteA = async (req, res, next) => {
  try {
    const result = await deleteEventDetail(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllA,
  createA,
  updateA,
  deleteA,
};
