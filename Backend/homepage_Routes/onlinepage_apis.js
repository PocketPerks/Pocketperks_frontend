import express from "express";
import { PrismaClient } from "@prisma/client";
import { getOrSetCache } from "../utlis/cache.js";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/offers", async (req, res) => {
  try {
    const data = await getOrSetCache("onlinepage:offers", async () => {
      const categories = await prisma.categories.findMany({
        select: {
          id: true,
          category_name: true,
          image_url: true,
          brands: {
            select: {
              brand: {
                select: {
                  brand_name: true,
                  logo_url: true,
                  description: true,
                  offer_highlight: true,
                  rating: true,
                  cashback: true,
                  cashback_type: true,
                },
              },
            },
          },
        },
      });

      const formatted = categories.map((cat) => ({
        name: cat.category_name,
        icon: cat.image_url ?? "",
        products: cat.brands.map((cb) => ({
          id: cb.brand.id,
          title: cb.brand.brand_name,
          logo_url: cb.brand.logo_url,
          data: cb.brand.description ?? "",
          offer: cb.brand.offer_highlight ?? "",
          rating: cb.brand.rating,
          cashback: cb.brand.cashback ?? "",
        })),
      }));

      return formatted;
    });

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
