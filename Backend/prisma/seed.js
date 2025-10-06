import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database... (without deleting existing data)");

  // --- STEP 1: Seed Categories ---
  const categoriesData = [
    { category_name: "Eco-Friendly Living", description: "Sustainable products and lifestyle items", image_url: "https://picsum.photos/seed/eco/200" },
    { category_name: "Local Handicrafts", description: "Traditional handmade goods from local artisans", image_url: "https://picsum.photos/seed/handicrafts/200" },
    { category_name: "Pet Essentials", description: "Food, toys, and accessories for pets", image_url: "https://picsum.photos/seed/pets/200" },
    { category_name: "Tech Accessories", description: "Phone cases, chargers, headphones, and more", image_url: "https://picsum.photos/seed/accessories/200" },
    { category_name: "Outdoor & Adventure", description: "Camping gear, hiking kits, and travel equipment", image_url: "https://picsum.photos/seed/outdoor/200" },
  ];

  await prisma.categories.createMany({
    data: categoriesData,
    skipDuplicates: true,
  });

  const categories = await prisma.categories.findMany();
  console.log("✅ Categories added!");

  // --- STEP 2: Seed Online Brands + Connect to Categories ---
  const onlineBrandsData = [
    {
      brand_name: "Craftopia",
      logo_url: "https://picsum.photos/seed/craftopia/200",
      description: "Online store for handcrafted home décor and gifts",
      is_featured: true,
      offer_highlight: "Handmade Festival Sale",
      cashback: "8%",
      cashback_type: "Cashback",
      connectCategories: ["Local Handicrafts", "Eco-Friendly Living"],
    },
    {
      brand_name: "PetPal Online",
      logo_url: "https://picsum.photos/seed/petpal/200",
      description: "All things pets delivered to your doorstep",
      is_featured: false,
      offer_highlight: "Flat 20% Off on First Order",
      cashback: "5%",
      cashback_type: "Flat",
      connectCategories: ["Pet Essentials"],
    },
  ];

  for (const brand of onlineBrandsData) {
    await prisma.brands
      .create({
        data: {
          brand_name: brand.brand_name,
          logo_url: brand.logo_url,
          description: brand.description,
          is_featured: brand.is_featured,
          offer_highlight: brand.offer_highlight,
          cashback: brand.cashback,
          cashback_type: brand.cashback_type,
          categories: {
            create: brand.connectCategories.map((catName) => ({
              category: { connect: { id: categories.find((c) => c.category_name === catName).id } },
            })),
          },
        },
      })
      .catch(() => console.log(`⚠️ Skipping duplicate online brand: ${brand.brand_name}`));
  }

  const onlineBrands = await prisma.brands.findMany();
  console.log("✅ Online Brands added & connected to categories!");

  // --- STEP 3: Seed Offline Brands + Connect to Categories ---
  const offlineBrandsData = [
    {
      brand_name: "Nature's Basket Local",
      logo_url: "https://picsum.photos/seed/naturesbasket/200",
      description: "Organic grocery store with fresh produce",
      is_featured: true,
      connectCategories: ["Eco-Friendly Living"],
    },
    {
      brand_name: "TrailBlazer Sports",
      logo_url: "https://picsum.photos/seed/trailblazer/200",
      description: "Specialty outdoor and trekking store",
      is_featured: false,
      connectCategories: ["Outdoor & Adventure"],
    },
  ];

  for (const offline of offlineBrandsData) {
    const created = await prisma.offlineBrands
      .create({
        data: {
          brand_name: offline.brand_name,
          logo_url: offline.logo_url,
          description: offline.description,
          is_featured: offline.is_featured,
          categories: {
            create: offline.connectCategories.map((catName) => ({
              category: { connect: { id: categories.find((c) => c.category_name === catName).id } },
            })),
          },
        },
      })
      .catch(() => console.log(`⚠️ Skipping duplicate offline brand: ${offline.brand_name}`));
  }

  const offlineBrands = await prisma.offlineBrands.findMany();
  console.log("✅ Offline Brands added & connected to categories!");

  // --- STEP 4: Seed Deals ---
  const dealsData = [
    {
      deal_title: "Eco-Friendly Travel Kit - 30% Off",
      category_id: categories.find((c) => c.category_name === "Eco-Friendly Living").id,
      offline_brand_id: offlineBrands.find((b) => b.brand_name === "Nature's Basket Local")?.id,
      discount_percent: 30,
      image_url: "https://picsum.photos/seed/travelkit/200",
    },
    {
      deal_title: "Handmade Bamboo Basket Cashback",
      category_id: categories.find((c) => c.category_name === "Local Handicrafts").id,
      brand_id: onlineBrands.find((b) => b.brand_name === "Craftopia")?.id,
      cashback_amount: 150,
      image_url: "https://picsum.photos/seed/basket/200",
    },
    {
      deal_title: "Pet Food Combo - Save ₹500",
      category_id: categories.find((c) => c.category_name === "Pet Essentials").id,
      brand_id: onlineBrands.find((b) => b.brand_name === "PetPal Online")?.id,
      discount_percent: 25,
      image_url: "https://picsum.photos/seed/petfood/200",
    },
    // --- NEW OFFLINE DEALS ADDED HERE ---
    {
      deal_title: "Waterproof Camping Tents - 25% Off",
      category_id: categories.find((c) => c.category_name === "Outdoor & Adventure").id,
      offline_brand_id: offlineBrands.find((b) => b.brand_name === "TrailBlazer Sports")?.id,
      discount_percent: 25,
      image_url: "https://picsum.photos/seed/tents/200",
    },
    {
      deal_title: "All-Weather Hiking Boots - Flat ₹1000 Cashback",
      category_id: categories.find((c) => c.category_name === "Outdoor & Adventure").id,
      offline_brand_id: offlineBrands.find((b) => b.brand_name === "TrailBlazer Sports")?.id,
      cashback_amount: 1000,
      image_url: "https://picsum.photos/seed/boots/200",
    },
    {
      deal_title: "Weekly Organic Veggie Box - 15% Discount",
      category_id: categories.find((c) => c.category_name === "Eco-Friendly Living").id,
      offline_brand_id: offlineBrands.find((b) => b.brand_name === "Nature's Basket Local")?.id,
      discount_percent: 15,
      image_url: "https://picsum.photos/seed/veggies/200",
    },
  ];

  await prisma.deals.createMany({
    data: dealsData,
    skipDuplicates: true,
  });

  console.log("✅ Deals added & linked to brands and categories!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("🌱 Seeding completed successfully!");
  })
  .catch(async (e) => {
    console.error("❌ Error while seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });