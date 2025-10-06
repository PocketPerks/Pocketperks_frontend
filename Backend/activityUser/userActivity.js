import e from "express";
import { PrismaClient } from "@prisma/client";

const router = e();
const prisma = new PrismaClient();

// 1. Ingest User Activity
router.post("/user-activity", async (req, res) => {
  try {
    const { userId, sessionId, pages, refButton, meta, timestamp } = req.body;

    const session = await prisma.userSession.create({
      data: {
        userId,
        sessionId,
        pages,
        refButton,
        meta,
        timestamp: timestamp ? new Date(timestamp) : new Date(),
      },
    });

    res.status(201).json({
      success: true,
      // message: "User session data saved successfully",
      // data: session,
    });
  } catch (error) {
    console.error("Failed to save session:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;