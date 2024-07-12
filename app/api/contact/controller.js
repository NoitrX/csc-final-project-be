const { StatusCodes } = require("http-status-codes");

const { getAllContact, createContact, detailContact, updateContact, deleteContact } = require("../../services/contact");

const getAllA = async (req, res, next) => {
  try {
    const result = await getAllContact(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const createA = async (req, res, next) => {
  console.log(req.body, "req");
  try {
    const result = await createContact(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const updateA = async (req, res, next) => {
  try {
    const result = await updateContact(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const deleteA = async (req, res, next) => {
  try {
    const result = await deleteContact(req);
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
