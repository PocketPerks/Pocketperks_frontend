"use client"
import { useState } from "react";
import {motion} from 'framer-motion'
import { Heart } from "lucide-react";
export default function OnlineHeart() {
  const [liked, setLiked] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  const handleLike = () => {
    setLiked((prev) => {
      const isNowLiked = !prev;
      if (isNowLiked) {
        const newBubbles = Array.from({ length: 8 }, (_, i) => ({
          id: Date.now() + i,
          x: Math.random() * 100 - 50,
          y: Math.random() * -80 - 20,
          size: Math.random() * 12 + 8,
        }));
        setBubbles(newBubbles);
        setTimeout(() => setBubbles([]), 1000);
      }
      return isNowLiked;
    });
  };

  return (
    <div className="relative top-[-5.2rem] right-3  p-4 rounded-xl">
      <motion.div
        className="absolute right-2 cursor-pointer"
        whileTap={{ scale: 0.7 }}
        onClick={handleLike}
      >
        <Heart
          size={30}
          className={
            liked
              ? "fill-red-500 border-2 rounded-full p-1 bg-pink-300 text-red-500"
              : "text-gray-400 border-2 rounded-full bg-white p-1"
          }
        />
      </motion.div>

      {/* Bubble burst effect */}
      {bubbles.map((bubble) => (
        <motion.span
          key={bubble.id}
          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          animate={{ opacity: 0, x: bubble.x, y: bubble.y, scale: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute top-3 right-5 rounded-full bg-pink-400"
          style={{ width: bubble.size, height: bubble.size }}
        />
      ))}
    </div>
  );
}
