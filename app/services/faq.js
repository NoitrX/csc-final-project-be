const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");

const getAllFaq = async (req) => {
  const result = await prisma.faq.findMany();
  return result;
};

const createFaq = async (req) => {
  const { title, description } = req.body;
  if (!title || !description) {
    throw new BadRequestError("All Fields Required!");
  }
  const result = await prisma.faq.create({
    data: {
      title: title,
      description: description,
    },
  });
  if (!result) {
    throw new BadRequestError("Create Failed!");
  }
  return result;
};

const detailFaq = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.faq.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateFaq = async (req) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  if (!title || !description) {
    throw new BadRequestError("All fields are required!!");
  }
  const result = await prisma.faq.update({
    where: {
      id: id,
    },
    data: {
      title,
      description,
    },
  });

  if (!result) {
    throw new BadRequestError("Edit Failed!");
  }

  return result;
};

const deleteFaq = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.faq.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new BadRequestError("Delete Failed!");
  }
  return result;
};

module.exports = { getAllFaq, createFaq, detailFaq, updateFaq, deleteFaq };
