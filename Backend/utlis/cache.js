// utils/cache.js
import { redisClient } from "../server.js";

export async function getOrSetCache(key, fetchData, ttl = 300) {
  const cached = await redisClient.get(key);
  if (cached) return JSON.parse(cached);

  const fresh = await fetchData();
  await redisClient.setEx(key, ttl, JSON.stringify(fresh));
  return fresh;
}

