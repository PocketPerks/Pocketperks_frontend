import express from "express";
import { PrismaClient } from "@prisma/client";
import { getOrSetCache } from "../utlis/cache.js";

const router = express.Router();
const prisma = new PrismaClient();

// Get all bank cards
router.get("/", async (req, res) => {
  try {
    const data = await getOrSetCache("homepage:cards", async () => {
      return await prisma.credit_cards.findMany({
        select: { id: true, bank_name: true, cashback_percent: true, image_url: true },
      });
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get card details //under work
router.get("/:id", async (req, res) => {
  try {
    const card = await getOrSetCache("", async () => {
      return await prisma.credit_cards.findUnique({
      where: { id: Number(req.params.id) },
    });
    })
    if (!card) return res.status(404).json({ error: "Card not found" });
    res.json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
