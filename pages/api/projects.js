import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*  Function to read project of Projects table and display in gallery */
export default async function handler(req, res) {
    const projects = await prisma.projects.findMany();
    res.status(200).json(projects);
  }