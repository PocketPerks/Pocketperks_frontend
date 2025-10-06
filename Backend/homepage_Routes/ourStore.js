import e from "express";
import { PrismaClient } from "@prisma/client";

const router = e();
const prisma = new PrismaClient();

//get all ofline brands
// router.get("/offline-stores", async (req, res) => {
//   try {
//     const stores = await prisma.offlineBrands.findMany({
//       include: {
//         id: true,
//         brand_name: true,
//         logo_url: true,
//         offer_highlight: true,
//       }
//     })

//     res.json(stores);
//   } catch (error) {
//     console.error("Error fetching offline deals:", error);
//     res.status(500).json({ error: "Failed to fetch offline stores" });
//   }
// })

// GET offline deals grouped by category

router.get("/offline-deals", async (req, res) => {
  try {
    const deals = await prisma.deals.findMany({
      where: {
        offline_brand_id: { not: null }, // only offline brand deals
      },
      include: {
        category: true,
      },
    });

    // Group deals by category
    const grouped = {};
    deals.forEach((deal) => {
      const catId = deal.category.id;

      if (!grouped[catId]) {
        grouped[catId] = {
          category_id: deal.category.id,
          category_name: deal.category.category_name,
          deals: [],
        };
      }

      grouped[catId].deals.push({
        id: deal.id,
        title: deal.deal_title,
        discount_percent: deal.discount_percent,
        cashback_amount: deal.cashback_amount,
        link: deal.link,
        image_url: deal.image_url,
        is_featured: deal.is_featured,
      });
    });

    // Convert grouped object into an array
    const response = Object.values(grouped);
    res.json(response);
  } catch (error) {
    console.error("Error fetching offline deals:", error);
    res.status(500).json({ error: "Failed to fetch offline deals" });
  }
});

export default router;
