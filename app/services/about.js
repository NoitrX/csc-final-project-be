const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");

const getAllAbout = async (req) => {
  const result = await prisma.about.findMany();
  return result;
};

const createAbout = async (req) => {
  const { description, vision, mission } = req.body;
  const img = req.files["img"] ? req.files["img"][0].path : null;
  const title_img = req.files["title_img"] ? req.files["title_img"][0].path : null;
  if (!description || !vision || !mission || !img || !title_img) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.about.create({
    data: {
      description,
      vision,
      mission,
      img,
      title_img,
    },
  });
  if (!result) {
    throw new BadRequestError("Create Failed!");
  }
  return result;
};

const detailAbout = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.about.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateAbout = async (req) => {
  const id = parseInt(req.params.id);
  const { description, vision, mission, img, title_img } = req.body;
  if (!description || !vision || !mission || !img || !title_img) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.about.update({
    where: {
      id: id,
    },
    data: {
      description,
      vision,
      mission,
      img,
      title_img,
    },
  });

  if (!result) {
    throw new BadRequestError("Edit Failed!");
  }
};

const deleteAbout = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.about.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new BadRequestError("Delete Failed!");
  }
  return result;
};

module.exports = {
  getAllAbout,
  createAbout,
  detailAbout,
  updateAbout,
  deleteAbout,
};
