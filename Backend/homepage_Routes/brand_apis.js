import express from "express";
import { PrismaClient } from "@prisma/client";
import { getOrSetCache } from "../utlis/cache.js";

const router = express.Router();
const prisma = new PrismaClient();

// Get all online brands brands
router.get("/", async (req, res) => {
  try {
    const data = await getOrSetCache("homepage:brands", async () => {
      return await prisma.brands.findMany({
        select: {
          id: true,
          brand_name: true,
          logo_url: true,
          offer_highlight: true,
        },
      });
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all brands merged 
router.get("/all-brands", async (req, res) => {
  try {
    // Online brands with cache
    const onlineBrands = await getOrSetCache("homepage:brands", async () => {
      return await prisma.brands.findMany({
        select: {
          id: true,
          brand_name: true,
          logo_url: true,
          offer_highlight: true,
        },
      });
    });

    // Offline brands with cache
    const offlineBrands = await getOrSetCache("homepage:offlinebrands", async () => {
      return await prisma.offlineBrands.findMany({
        select: {
          id: true,
          brand_name: true,
          logo_url: true,
          offer_highlight: true,
        },
      });
    });

    // Merge both arrays
    const mergedBrands = [...onlineBrands, ...offlineBrands];

    res.json(mergedBrands);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch brands" });
  }
});


router.get("/:id/details", async (req, res) => {
  try {
    const { id } = req.params;
    const brandId = Number(id);

    if (isNaN(brandId)) {
      return res.status(400).json({ message: "Invalid brand ID" });
    }

    // ✅ Fetch directly from DB
    const brandData = await prisma.brands.findUnique({
      where: { id: brandId },
      include: {
        carousel_images: {
          select: {
            id: true,
            image_url: true,
          },
        },
        categories: {
          include: {
            category: {
              select: {
                id: true,
                category_name: true,
              },
            },
          },
        },
      },
    });

    if (!brandData) {
      return res.status(404).json({ message: "Brand not found" });
    }

    // ✅ Fetch rewards separately (fresh)
    const rewards = await prisma.rewards_info.findMany({
      where: { id: brandId },
    });

    // ✅ Just attach rewards to response
    res.json({ ...brandData, rewards });
  } catch (error) {
    console.error("Error fetching brand details:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all popular brands
router.get("/popular", async (req, res) => {
  try {
    const brands = await getOrSetCache("homepage:popularBrands", async () => {
      const data = await prisma.brands.findMany({
        where: { is_featured: true },
        select: {
          id: true,
          brand_name: true,
          logo_url: true,
          cashback: true,
        },
      });

      // Format response to match frontend expectations
      return data.map((brand) => ({
        id: brand.id,
        title: brand.brand_name,
        logo: brand.logo_url || null,
        cashback: brand.cashback || "N/A",
      }));
    });

    res.json(brands);
  } catch (err) {
    console.error("❌ Error fetching popular brands:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
