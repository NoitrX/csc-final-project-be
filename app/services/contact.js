const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");
const fs = require("fs");
const path = require("path");

const getAllContact = async (req) => {
  const result = await prisma.contact.findMany();
  return result;
};

const createContact = async (req) => {
  const { title, url } = req.body;
  const img = req.files["img"] ? req.files["img"][0].path : null;
  if (!title || !url || !img) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.contact.create({
    data: {
      title,
      url,
      img,
    },
  });
  if (!result) {
    throw new BadRequestError("Create Failed!");
  }
  return result;
};

const updateContact = async (req) => {
  const id = parseInt(req.params.id);

  const { title, url } = req.body;

  if (!title || !url) {
    throw new BadRequestError("All fields are required!!");
  }
  const img = req.files["img"] ? req.files["img"][0].path : null;
  const currentContact = await prisma.contact.findUnique({
    where: { id: id },
  });

  if (!currentContact) {
    throw new BadRequestError("Record not found!!");
  }

  if (img && currentContact.img) {
    // const oldImagePath = path.join(__dirname, "..", currentContact.img);
    const oldImagePath = path.join(__dirname, "..", "..", "public", "uploads", path.basename(currentContact.img));
    fs.unlink(oldImagePath, (err) => {
      if (err) console.error(`Failed to delete old img: ${err.message}`);
    });
  }
  const result = await prisma.contact.update({
    where: {
      id: id,
    },
    data: {
      title,
      url,
      img: img ? img.replace("public/", "uploads/") : currentAbout.img,
    },
  });

  if (!result) {
    throw new BadRequestError("Edit Failed!");
  }

  return result;
};

const deleteContact = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.contact.delete({
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
  getAllContact,
  createContact,
  updateContact,
  deleteContact,
};
