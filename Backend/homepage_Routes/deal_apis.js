import express from "express";
import { PrismaClient } from "@prisma/client";
import { getOrSetCache } from "../utlis/cache.js";

const router = express.Router();
const prisma = new PrismaClient();

// Get featured deals
router.get("/featured", async (req, res) => {
  try {
    const data = await getOrSetCache("homepage:deals:featured", async () => {
      return await prisma.deals.findMany({
        where: { is_featured: true },
        select: {
          id: true,
          deal_title: true,
          discount_percent: true,
          image_url: true,
          // brand: { select: { id: true, brand_name: true } },
          // category: { select: { id: true, category_name: true } },
        },
      });
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
