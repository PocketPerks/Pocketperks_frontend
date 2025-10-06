import express from "express";
import { PrismaClient } from "@prisma/client";

import hashPassword from "../utlis/hashPassword.js";
import generateToken from "../utlis/generateToken.js";

const router = express.Router();
const prisma = new PrismaClient();

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

    // check existing
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: 'User already exists' });

    const hashed = await hashPassword(password);
    const user = await prisma.user.create({
      data: { email, password: hashed, name }
    });

    const token = generateToken(user);
    // Do not return password
    const { password: _p, ...userSafe } = user;
    res.status(201).json({ user: userSafe});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;