"use client";

import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

export default function Description() {
  const features: Feature[] = [
    {
      title: "High Quality",
      description: "Premium materials and build ensure longevity and durability.",
    },
    {
      title: "Fast Shipping",
      description: "Get your product delivered quickly and reliably.",
    },
    {
      title: "Customer Support",
      description: "24/7 support to assist you with any issues or questions.",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-3xl mt-6 p-6 text-gray-900">
      <h2 className="text-2xl font-bold mb-4">Product Description</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        This section provides detailed information about the product, its
        features, and specifications to help customers make informed decisions.
      </p>

      <div className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}