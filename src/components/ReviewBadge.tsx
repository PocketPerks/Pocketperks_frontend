import React from "react";
import { Star } from "lucide-react";

interface ReviewBadgeProps {
  rating: number;
  reviews: number;
  size?: "sm" | "md" | "lg";
}

const ReviewBadge: React.FC<ReviewBadgeProps> = ({ rating, reviews, size = "md" }) => {
  const sizes = {
    sm: { text: "text-xs", icon: "w-3 h-3 mr-0.5" },
    md: { text: "text-sm", icon: "w-4 h-4 mr-1" },
    lg: { text: "text-base", icon: "w-5 h-5 mr-1.5" },
  };

  const current = sizes[size];

  return (
    <div className={`flex items-center ${current.text} text-gray-800`}>
      <Star className={`${current.icon} text-gray-800 fill-gray-800`} />
      <span>
        {rating.toFixed(1)} / 5 • {reviews} Reviews
      </span>
    </div>
  );
};

export default ReviewBadge;
