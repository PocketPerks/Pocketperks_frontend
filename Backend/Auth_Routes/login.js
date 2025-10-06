import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import generateToken from "../utlis/generateToken.js";

const router = express.Router();
const prisma = new PrismaClient();

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and password are required" });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = generateToken(user);
    const { password: _p, ...userSafe } = user;
    res.json({ user: userSafe, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
