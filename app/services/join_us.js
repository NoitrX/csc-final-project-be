const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");

const getAllJoinUs = async (req) => {
  const result = await prisma.join_us.findMany();
  return result;
};

const createJoinUs = async (req) => {
  const { title, description, url } = req.body;
  if (!title || !description || !url) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.join_us.create({
    data: {
      title,
      description,
      url,
    },
  });
  if (!result) {
    throw new BadRequestError("Create Failed!");
  }
  return result;
};

const detailJoinUs = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.join_us.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateJoinUs = async (req) => {
  const id = parseInt(req.params.id);
  const { title, description, url } = req.body;
  if (!title || !description || !url) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.join_us.update({
    where: {
      id: id,
    },
    data: {
      title,
      description,
      url,
    },
  });

  if (!result) {
    throw new BadRequestError("Edit Failed!");
  }

  return result;
};

const deleteJoinUs = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.join_us.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new BadRequestError("Delete Failed!");
  }
  return result;
};

module.exports = { getAllJoinUs, createJoinUs, detailJoinUs, updateJoinUs, deleteJoinUs };
