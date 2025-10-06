import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Create category
router.post("/create", async (req, res) => {
  try {
    const { category_name, description, image_url } = req.body;
    const category = await prisma.categories.create({
      data: { category_name, description, image_url },
    });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update category
router.put("/update/:id", async (req, res) => {
  try {
    const category = await prisma.categories.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete category
router.delete("/delete/:id", async (req, res) => {
  try {
    await prisma.categories.delete({
      where: { id: Number(req.params.id) },
    });
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
