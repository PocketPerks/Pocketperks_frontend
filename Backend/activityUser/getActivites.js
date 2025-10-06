import e from "express";
import { PrismaClient } from "@prisma/client";

const router = e();
const prisma = new PrismaClient();

// 2. Get All Activities (for debugging/admin only)
router.get("/user-activity", async (req, res) => {
try {
const activities = await prisma.UserSession.findMany({ orderBy: { timestamp: "desc" } });
res.json(activities);
} catch (error) {
console.error("Failed to fetch activities:", error);
res.status(500).json({ success: false, error: "Internal Server Error" });
}
});

// 3. Get Activities By Session ID
router.get("/user-activity/:sessionId", async (req, res) => {
try {
const { sessionId } = req.params;
const activities = await prisma.UserSession.findMany({
where: { sessionId },
orderBy: { timestamp: "asc" },
});


res.json(activities);
} catch (error) {
console.error("Failed to fetch session activities:", error);
res.status(500).json({ success: false, error: "Internal Server Error" });
}
});

export default router;