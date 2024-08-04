const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");
const fs = require("fs");
const path = require("path");

const getAllDivision = async (req) => {
  const result = await prisma.division.findMany();
  return result;
};

const createDivision = async (req) => {
  const { title_division, description, focus_area, link_silabus } = req.body;
  const image_division = req.files["image_division"] ? req.files["image_division"][0].path : null;
  if (!title_division || !description || !image_division) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.division.create({
    data: {
      title_division,
      description,
      image_division,
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
  const result = await prisma.division.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateDivision = async (req) => {
  const id = parseInt(req.params.id);
  const { title_division, description, focus_area, link_silabus } = req.body;
  if (!title_division || !description || !focus_area) {
    throw new BadRequestError("All fields are required!!");
  }

  const currentDivision = await prisma.division.findUnique({
    where: { id: id },
  });
  console.log(req.files, "REQ FILES");
  console.log(currentDivision, "Current Division");

  const img = req.files.image_division ? req.files.image_division[0].path : undefined;

  if (img && currentDivision.image_division) {
    const oldImagePath = path.join(__dirname, "..", "..", "public", "uploads", path.basename(currentDivision.image_division));
    fs.unlink(oldImagePath, (err) => {
      if (err) console.error(`Failed to delete old img: ${err.message}`);
    });
  }
  const result = await prisma.division.update({
    where: {
      id: id,
    },
    data: {
      title_division,
      description,
      image_division: img ? img.replace("public/", "uploads/") : currentDivision.image_division,
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
  const currentDivision = await prisma.division.findUnique({
    where: { id: id },
  });
  if (currentDivision.image_division) {
    const oldImagePath = path.join(__dirname, "..", "..", "public", "uploads", path.basename(currentDivision.image_division));
    fs.unlink(oldImagePath, (err) => {
      if (err) console.error(`Failed to delete old img: ${err.message}`);
    });
  }
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
