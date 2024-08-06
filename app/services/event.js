const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");
const fs = require("fs");
const path = require("path");

const getAllEvent = async (req) => {
  const result = await prisma.event.findMany();
  return result;
};

const createEvent = async (req) => {
  const { title_img, description, dateEvent } = req.body;
  const img_event = req.files["img_event"] ? req.files["img_event"][0].path : null;
  if (!img_event || !title_img || !description) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.event.create({
    data: {
      img_event,
      title_img,
      description,
      dateEvent: new Date(dateEvent).toISOString(),
    },
  });
  if (!result) {
    throw new BadRequestError("Create Failed!");
  }
  return result;
};

const detailEvent = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.event.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateEvent = async (req) => {
  const id = parseInt(req.params.id);
  const { title_img, description, dateEvent } = req.body;
  if (!title_img || !description) {
    throw new BadRequestError("All fields are required!!");
  }

  const currentEvent = await prisma.event.findUnique({
    where: { id: id },
  });

  const img = req.files.img_event ? req.files.img_event[0].path : undefined;
  if (img && currentEvent.img_event) {
    const oldImagePath = path.join(__dirname, "..", "..", "public", "uploads", path.basename(currentEvent.img_event));
    fs.unlink(oldImagePath, (err) => {
      if (err) console.error(`Failed to delete old img: ${err.message}`);
    });
  }
  const result = await prisma.event.update({
    where: {
      id: id,
    },
    data: {
      img_event: img ? img.replace("public/", "uploads/") : currentEvent.img_event,
      title_img,
      description,
      dateEvent: new Date(dateEvent).toISOString(),
    },
  });

  if (!result) {
    throw new BadRequestError("Edit Failed!");
  }

  return result;
};

const deleteEvent = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.event.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new BadRequestError("Delete Failed!");
  }
  return result;
};

module.exports = { getAllEvent, createEvent, detailEvent, updateEvent, deleteEvent };
