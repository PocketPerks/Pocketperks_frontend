import express from "express";
import dotenv from "dotenv";
import { createClient } from "redis";
import cors from "cors";

const JWT_SECRET = process.env.JWT_SECRET;

import genBanner from "./banner/addBanner.js";
import getActivites from "./activityUser/getActivites.js";
import userActivity from "./activityUser/userActivity.js";

import categoryRoutes from "./homepage_Routes/categories_apis.js";
import brandRoutes from "./homepage_Routes/brand_apis.js";
import dealRoutes from "./homepage_Routes/deal_apis.js";
import cardRoutes from "./homepage_Routes/card_apis.js";
import onlinepage from "./homepage_Routes/onlinepage_apis.js";
import ourStores from "./homepage_Routes/ourStore.js";

import amindCategoryRoutes from "./admin_Routes/categoriesAdmin_apis.js";
import adminBrandRoutes from "./admin_Routes/brandAdmin_apis.js";
import adminDealRoutes from "./admin_Routes/dealAdmin_apis.js";
import adminCardRoutes from "./admin_Routes/cardAdmin_apis.js";

import currentUser from "./Auth_Routes/currentUser.js";
import register from "./Auth_Routes/register.js";
import login from "./Auth_Routes/login.js";

import generateCode from "./voucherGenerate/generateCode.js";

dotenv.config({ quiet: true });
const app = express();

// -------------------- Redis Setup --------------------
export const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("connect", () => console.log("✅ Connected to Redis Cloud"));

await redisClient.connect();

// Make redisClient available globally
app.set("redisClient", redisClient);

//cors
app.use(
  cors({
    origin: "*", // allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Homepage Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/credit-cards", cardRoutes);
app.use("/api/online", onlinepage);
app.use("/api/ourStore/", ourStores);

// Admin Routes
app.use("/api/admin/categories", amindCategoryRoutes);
app.use("/api/admin/brands", adminBrandRoutes);
app.use("/api/admin/deals", adminDealRoutes);
app.use("/api/admin/credit-cards", adminCardRoutes);

//Auth Routes
app.use("/api/authRegister", register);
app.use("/api/authLogin", login);
app.use("/api/authCurrent", currentUser);

//User Activity
app.use("/api/admin/analytics", getActivites);
app.use("/api/admin/ingestActivity", userActivity);

//Generate Uniquq Code
app.use("/api/voucher/", generateCode);

//genreate Banner
app.use("/api/banner/", genBanner);

// Health
app.get("/", (req, res) => res.json({ ok: true }));

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
