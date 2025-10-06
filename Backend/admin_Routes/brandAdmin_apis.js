import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Create Online Brand
router.post("/create-online", async (req, res) => {
  try {
    const {
      brand_name,
      logo_url,
      description,
      is_featured,
      offer_highlight,
      cashback,
      cashback_type,
      is_sale,
      offerLink,
      category_ids,
    } = req.body;

    const brand = await prisma.brands.create({
      data: {
        brand_name,
        logo_url,
        description,
        is_featured: is_featured ?? false,
        offer_highlight,
        cashback,
        cashback_type,
        is_sale: is_sale ?? false,
        offerLink,
        categories: {
          create: category_ids?.map((catId) => ({
            category: { connect: { id: catId } },
          })) || [],
        },
      },
      include: { categories: { include: { category: true } } },
    });

    res.status(201).json(brand);
  } catch (err) {
    console.error("Error creating online brand:", err);
    res.status(400).json({ error: err.message });
  }
});

// Create Offline Brand
router.post("/create-offline", async (req, res) => {
  try {
    const {
      brand_name,
      logo_url,
      description,
      is_featured,
      offer_highlight,
      cashback,
      cashback_type,
      is_sale,
      offerLink,
      category_ids,
    } = req.body;

    const offlineBrand = await prisma.offlineBrands.create({
      data: {
        brand_name,
        logo_url,
        description,
        is_featured: is_featured ?? false,
        offer_highlight,
        cashback,
        cashback_type,
        is_sale: is_sale ?? false,
        offerLink,
        categories: {
          create: category_ids?.map((catId) => ({
            category: { connect: { id: catId } },
          })) || [],
        },
      },
      include: { categories: { include: { category: true } } },
    });

    res.status(201).json(offlineBrand);
  } catch (err) {
    console.error("Error creating offline brand:", err);
    res.status(400).json({ error: err.message });
  }
});

router.post("/:id/carousel", async (req, res) => {
  try {
    const { id } = req.params;
    const { images } = req.body; // array of URLs

    if (!Array.isArray(images) || images.length === 0) {
      return res.status(400).json({ message: "Images array is required" });
    }

    const data = images.map((img) => ({
      brand_id: Number(id),
      image_url: img,
    }));

    await prisma.carousel_images.createMany({ data });

    res.status(201).json({ message: "Carousel images added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding carousel images" });
  }
});

router.post("/:id/rewards", async (req, res) => {
  try {
    const { id } = req.params;
    const { rewards_track_in, reward_used, vouchers_taken } = req.body;

    const reward = await prisma.rewards_info.create({
      data: {
        brand_id: Number(id),
        rewards_track_in,
        reward_used,
        vouchers_taken: vouchers_taken ?? 0,
      },
    });

    res.status(201).json({ message: "Reward info added successfully", reward });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding reward info" });
  }
});

// Update brand/company
router.put("/update/:id", async (req, res) => {
  try {
    const brand = await prisma.brands.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(brand);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete brand/company
router.delete("/delete/:id", async (req, res) => {
  try {
    await prisma.brands.delete({
      where: { id: Number(req.params.id) },
    });
    res.json({ message: "Brand deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
