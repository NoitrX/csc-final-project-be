const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");

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
  const img = req.files["img"] ? req.files["img"][0].path : null;
  const { title, url } = req.body;
  if (!title || !url || !img) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.contact.update({
    where: {
      id: id,
    },
    data: {
      title, url
      img,
    },
  });

  if (!result) {
    throw new BadRequestError("Edit Failed!");
  }
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
  