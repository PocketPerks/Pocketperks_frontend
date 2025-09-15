"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePreview from "@/components/product/ImagePreview";
import Description from "@/components/product/Description";
import Offers from "@/components/product/Offers";
import ActionButtons from "@/components/product/ActionButtons";
import CompanyCard from "@/components/product/CompanyCard";
import Terms from "@/components/product/Terms";

export default function ProductPage() {
  const images = [
    "/slider/amazonp.jpg",
    "/slider/fallback.jpg",
    "/slider/flipkart.jpg",
  ];

  const reviews = [
    {
      user: "Rahul S.",
      comment: "Amazing discounts! Got cashback within a week.",
    },
    {
      user: "Ananya P.",
      comment: "Coupons work perfectly, saved a lot on my order.",
    },
    { user: "Vikram K.", comment: "Fast delivery and great customer support." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <ImagePreview images={images} />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <CompanyCard
            logo="/logos/amazon.png"
            name="Amazon"
            description="Amazon is one of the world’s largest e-commerce companies, offering everything from electronics to fashion. Trusted by millions of users with fast delivery and exclusive deals. Amazon also offers Prime membership benefits including free shipping and Prime Video."
            rating={4.6}
            reviews={12000}
            reviewComments={reviews}
          />

          <ActionButtons />
        </div>
      </main>

      <section className="container mx-auto px-6 py-10 space-y-10">
        <Offers />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Description />
          <Terms />
        </div>
      </section>
      <Footer />
    </div>
  );
}
