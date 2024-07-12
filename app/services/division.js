const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");

const getAllDivision = async (req) => {
  const result = await prisma.division.findMany();
  return result;
};

const createDivision = async (req) => {
  const { title_division, description, detail_division, focus_area, link_silabus } = req.body;
  const image_detail = req.files["image_detail"] ? req.files["image_detail"][0].path : null;
  const image_division = req.files["image_division"] ? req.files["image_division"][0].path : null;
  if (!title_division || !description || !image_division || !detail_division || !image_detail) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.division.create({
    data: {
      title_division,
      description,
      image_division,
      detail_division,
      image_detail,
      focus_area,
      link_silabus,
    },
  });
  if (!result) {
    throw new BadRequestError("Create Failed!");
  }
  return result;
};

const detailDivision = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.divison.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateDivision = async (req) => {
  const id = parseInt(req.params.id);
  const { title_division, description, image_division, detail_division, image_detail, focus_area, link_silabus } = req.body;
  if (!title_division || !description || !image_division || !detail_division || !image_detail) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.divison.update({
    where: {
      id: id,
    },
    data: {
      title_division,
      description,
      image_division,
      detail_division,
      image_detail,
      focus_area,
      link_silabus,
    },
  });
  if (!result) {
    throw new BadRequestError("Edit Failed!");
  }
  return result;
};

const deleteDivision = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.division.delete({
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
  getAllDivision,
  createDivision,
  detailDivision,
  updateDivision,
  deleteDivision,
};
