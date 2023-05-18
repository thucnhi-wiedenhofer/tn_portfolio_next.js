import { PrismaClient } from "@prisma/client";

// Function to create data in ContactPortfolio table after submit contact form
export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const prospect = await prisma.contactPortfolio.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        date: req.body.date,
      },
    });
    res.json(prospect);
  }

  if (req.method === "GET") {
    const contacts = await prisma.contactPortfolio.findMany();
    res.status(200).json(contacts);
  }
}