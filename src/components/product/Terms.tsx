"use client";

import { ShieldCheck } from "lucide-react";

interface Term {
  title: string;
  description: string;
}

export default function Terms() {
  const terms: Term[] = [
    {
      title: "Usage Policy",
      description:
        "You agree to use this product responsibly and not for any unlawful purposes.",
    },
    {
      title: "Refund Policy",
      description:
        "Refunds are available within 14 days of purchase, subject to our guidelines.",
    },
    {
      title: "Privacy",
      description:
        "We are committed to protecting your data and ensuring your privacy is respected.",
    },
    {
      title: "Liability",
      description:
        "The company is not responsible for damages caused by misuse of the product.",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-3xl mt-6 p-6 text-gray-900">
      <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Please read these terms and conditions carefully before using our
        product or services.
      </p>

      <div className="space-y-4">
        {terms.map((term, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900">{term.title}</h3>
              <p className="text-gray-700 text-sm">{term.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


