import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Create deal
router.post("/create", async (req, res) => {
  try {
    const {
      deal_title,
      brand_id,
      category_id,
      discount_percent,
      cashback_amount,
      link,
      image_url,
      is_featured,
    } = req.body;

    const deal = await prisma.deals.create({
      data: {
        deal_title,
        brand_id,
        category_id,
        discount_percent,
        cashback_amount,
        link,
        image_url,
        is_featured: is_featured || false,
      },
    });

    res.status(201).json(deal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update deal
router.put("/update/:id", async (req, res) => {
  try {
    const deal = await prisma.deals.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(deal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete deal
router.delete("/delete/:id", async (req, res) => {
  try {
    await prisma.deals.delete({
      where: { id: Number(req.params.id) },
    });
    res.json({ message: "Deal deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
