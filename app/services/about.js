const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");
const fs = require("fs");
const path = require("path");

const getAllAbout = async (req) => {
  const result = await prisma.about.findMany();
  return result;
};

const createAbout = async (req) => {
  const { headerImage, title_img } = req.body;
  const img = req.files["img"] ? req.files["img"][0].path : null;
  if (!headerImage || !title_img) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.about.create({
    data: {
      headerImage,
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
  try {
    const id = parseInt(req.params.id);
    const { headerImage, title_img } = req.body;

    if (!headerImage || !title_img) {
      throw new BadRequestError("All fields are required!!");
    }

    const currentAbout = await prisma.about.findUnique({
      where: { id: id },
    });

    if (!currentAbout) {
      throw new BadRequestError("Record not found!!");
    }

    const img = req.files.img ? req.files.img[0].path : undefined;

    if (img && currentAbout.img) {
      // const oldImagePath = path.join(__dirname, "..", currentAbout.img);
      const oldImagePath = path.join(__dirname, "..", "..", "public", "uploads", path.basename(currentAbout.img));
      fs.unlink(oldImagePath, (err) => {
        if (err) console.error(`Failed to delete old img: ${err.message}`);
      });
    }

    const result = await prisma.about.update({
      where: {
        id: id,
      },
      data: {
        headerImage,
        img: img ? img.replace("public/", "uploads/") : currentAbout.img,
        title_img,
      },
    });

    if (!result) {
      throw new BadRequestError("Edit Failed!");
    }
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteAbout = async (req) => {
  const id = parseInt(req.params.id);
  const currentAbout = await prisma.about.findUnique({
    where: { id: id },
  });
  if (currentAbout.img) {
    const oldImagePath = path.join(__dirname, "..", "..", "public", "uploads", path.basename(currentAbout.img));
    fs.unlink(oldImagePath, (err) => {
      if (err) console.error(`Failed to delete old img: ${err.message}`);
    });
  }
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
