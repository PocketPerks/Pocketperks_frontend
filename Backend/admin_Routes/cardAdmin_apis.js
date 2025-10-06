import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Create card
router.post("/create", async (req, res) => {
  try {
    const {
      bank_name,
      card_name,
      cashback_percent,
      cashback_amount,
      joining_offer,
      benefits,
      link,
      image_url,
      is_featured,
    } = req.body;

    const card = await prisma.credit_cards.create({
      data: {
        bank_name,
        card_name,
        cashback_percent,
        cashback_amount,
        joining_offer,
        benefits,
        link,
        image_url,
        is_featured: is_featured || false,
      },
    });

    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update credit card
router.put("/update/:id", async (req, res) => {
  try {
    const card = await prisma.credit_cards.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(card);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete credit card
router.delete("/delete/:id", async (req, res) => {
  try {
    await prisma.credit_cards.delete({
      where: { id: Number(req.params.id) },
    });
    res.json({ message: "Credit card deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
