import express from "express";
import crypto from "crypto";
import sharp from "sharp";
import { fileTypeFromBuffer } from "file-type";
import { PrismaClient } from "@prisma/client";
import upload from "../utlis/upload.js"; // multer config (memory storage)

const prisma = new PrismaClient();
const router = express.Router();

router.post("/create", upload.single("banner"), async (req, res) => {
  try {
    // 1️⃣ Check if file exists
    if (!req.file) {
      return res.status(400).json({ error: "No banner file uploaded" });
    }

    const { brandName, title, percentageOff, gradientType, categories } =
      req.body;
    const { buffer, mimetype, size } = req.file;

    // 2️⃣ Validate file size (max 2MB)
    if (size > 2 * 1024 * 1024) {
      return res
        .status(400)
        .json({ error: "File too large. Max 2MB allowed." });
    }

    // 3️⃣ Validate mime type
    const allowedMimes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedMimes.includes(mimetype)) {
      return res.status(400).json({ error: "Invalid file type" });
    }

    // 4️⃣ Validate magic number (real file type check)
    const type = await fileTypeFromBuffer(buffer);
    if (!type || !allowedMimes.includes(type.mime)) {
      return res
        .status(400)
        .json({ error: "File content is not a valid image" });
    }

    // 5️⃣ Sanitize and convert image using sharp
    const safeBuffer = await sharp(buffer)
      .toFormat("png") // normalize to PNG
      .toBuffer();

    // 6️⃣ Generate secure filename
    const safeFilename = crypto.randomBytes(16).toString("hex") + ".png";

    // 7️⃣ Store in database
    const banner = await prisma.banner.create({
      data: {
        brandName,
        title,
        percentageOff: percentageOff ? parseInt(percentageOff) : 0,
        gradientType,
        categories: categories ? JSON.parse(categories) : [],
        filename: safeFilename,
        mimetype: "image/png",
        banner: safeBuffer, // binary data
      },
    });

    // 8️⃣ Send response
    res.json({ message: "Banner created successfully", id: banner.id });
  } catch (err) {
    console.error("Error saving banner:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

//get all banners
// ✅ Get All Banners (with base64 image)
router.get("/getBanners", async (req, res) => {
  try {
    const banners = await prisma.banner.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Convert binary buffer to base64 string for each banner
    const result = banners.map((b) => ({
      id: b.id,
      brandName: b.brandName,
      title: b.title,
      percentageOff: b.percentageOff,
      gradientType: b.gradientType,
      categories: b.categories,
      banner: `data:${b.mimetype};base64,${b.banner.toString("base64")}`,
    }));

    res.json(result);
  } catch (err) {
    console.error("Error fetching banners:", err);
    res
      .status(500)
      .json({ error: "Something went wrong while fetching banners" });
  }
});

export default router;
