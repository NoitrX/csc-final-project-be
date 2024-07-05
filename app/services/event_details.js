const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");

const getAllEventDetail = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.event_detail.findMany({
    where: {
      id: id,
    },
  });
  return result;
};

const createEventDetail = async (req) => {
  const { event_id, url_img, description_detail } = req.body;
  if (!event_id || !url_img || !description_detail) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.event_detail.create({
    data: {
      event_id,
      url_img,
      description_detail,
    },
  });
  if (!result) {
    throw new BadRequestError("Create Failed!");
  }
  return result;
};

const updateEventDetail = async (req) => {
  const id = parseInt(req.params.id);
  const { event_id, url_img, description_detail } = req.body;
  if (!event_id || !url_img || !description_detail) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.event_detail.update({
    where: {
      id: id,
    },
    data: {
      event_id,
      url_img,
      description_detail,
    },
  });

  if (!result) {
    throw new BadRequestError("Edit Failed!");
  }

  return result;
};

const deleteEventDetail = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.event_detail.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new BadRequestError("Delete Failed!");
  }
  return result;
};

module.exports = { getAllEventDetail, createEventDetail, updateEventDetail, deleteEventDetail };
