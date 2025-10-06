import express from "express";
import { PrismaClient } from "@prisma/client";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();
const prisma = new PrismaClient();

// Protected route: get current user
router.get('/currentuser', authMiddleware, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(req.user.id) } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const { password: _p, ...userSafe } = user;
    res.json({ user: userSafe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;