import express from "express";
import { PrismaClient } from "@prisma/client";
import { getOrSetCache } from "../utlis/cache.js";

const prisma = new PrismaClient();
const router = express.Router();

// Get all categories (with brands and deals count)
router.get("/", async (req, res) => {
  try {
    const data = await getOrSetCache("homepage:categories", async () => {
      const categories = await prisma.categories.findMany({
        select: {
          id: true,
          category_name: true,
          image_url: true,
        },
      });

      return categories;
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id/brands", async (req, res) => {
  try {
    const category = await getOrSetCache(
      `homepage:brands:${req.params.id}`,
      async () => {
        return await prisma.categories.findUnique({
          where: { id: Number(req.params.id) },
          include: {
            brands: { include: { brand: true } },
          },
        });
      }
    );

    if (!category) return res.status(404).json({ error: "Category not found" });

    const brands = category.brands.map((b) => {
      const brand = b.brand;
      return {
        id: brand.id,
        title: brand.brand_name,
        logo: brand.logo_url || null,
        saleText: brand.offer_highlight || "",
        cashback: brand.cashback || "N/A",
        link: "Rewards Rates & Terms",
      };
    });

    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
