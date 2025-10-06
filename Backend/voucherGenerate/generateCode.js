import express from "express";
import { PrismaClient } from "@prisma/client";
import { customAlphabet } from "nanoid";

const prisma = new PrismaClient();
const router = express.Router();

// Define custom alphabet (A–Z and 0–9), length = 10
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const generateCode = customAlphabet(alphabet, 10);

router.post("/generate-redeem", async (req, res) => {
  let code;
  let isUnique = false;

  while (!isUnique) {
    code = generateCode(); // always 10 chars
    const exists = await prisma.redeemCode.findUnique({ where: { code } });
    if (!exists) {
      isUnique = true;
      await prisma.redeemCode.create({ data: { code, used: false } });
    }
  }

  res.json({ redeemCode: code });
});

export default router;