import React from "react";

const Page = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#fff", minHeight: "100vh", padding: "20px" }}>

      {/* Main Content Wrapper */}
      <div style={{ maxWidth: 900, margin: "auto", display: "flex", gap: 20, flexWrap: "wrap" }}>
        {/* Left side - Slider */}
        <div
          style={{
           
          }}
        >
          <img src="/Referal.png" className="object-contain h-full w-full"/>
          

          {/* Slider indicators */}
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 6,
            }}
          >
           
          </div>
        </div>

        {/* Right side - Amazon Promo Card */}
        <div
          style={{
            flex: "1 1 260px",
            border: "1px solid #e0e7ff",
            borderRadius: 8,
            padding: 16,
            fontSize: 12,
            color: "#444",
          }}
        >
          {/* Amazon logo + rating */}
          <div className="text-center text-xl font-bold p-7 flex flex-col gap-5">
            <label className="text-center">Your Unique Referal Link</label>
            <div className="bg-gray-300 h-10 rounded-xl p-2">Referal code</div>
          </div>
        </div>
      </div>

      {/* Below content - offers, timelines, terms */}
      <div style={{ maxWidth: 900, margin: "40px auto 20px", fontSize: 12, color: "#333" }}>
        {/* Top Amazon Offers */}
        <section
          style={{
            border: "1px solid #e0e7ff",
            borderRadius: 8,
            padding: 16,
            marginBottom: 20,
          }}
        >
          <b>Top Amazon Offers</b>
          <p style={{ marginTop: 8, fontSize: 11 }}>
            Up to 80% Off Across Categories + Upto 5% CashKaro Rewards on Home, Fashion, Mobiles, Beauty & more
          </p>
          <a href="#" style={{ color: "#0059ff", fontSize: 11, textDecoration: "none" }}>
            See Offer Details &rarr;
          </a>
        </section>

        {/* Important Timelines */}
        <section
          style={{
            border: "1px solid #e0e7ff",
            borderRadius: 8,
            padding: 16,
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <div style={{ flex: 1, padding: 8 }}>
            <div style={{ fontWeight: "bold", fontSize: 24, color: "#00129b" }}>72</div>
            <div style={{ fontWeight: "bold", fontSize: 9 }}>Hours of Shipmen</div>
            <div style={{ fontSize: 10, color: "#555" }}>Rewards track in</div>
          </div>

          <div style={{ flex: 1, padding: 8 }}>
            <div style={{ fontWeight: "bold", fontSize: 24, color: "#00129b" }}>30</div>
            <div style={{ fontWeight: "bold", fontSize: 9 }}>Days</div>
            <div style={{ fontSize: 10, color: "#555" }}>Rewards confirm in</div>
          </div>

          <div style={{ flex: 1, padding: 8 }}>
            <div style={{ fontWeight: "bold", fontSize: 24, color: "#00129b" }}>YES</div>
            <div style={{ fontWeight: "bold", fontSize: 9 }}>Rewards on Amazon app orders?</div>
          </div>
        </section>

        {/* Important Terms & Conditions */}
        <section
          style={{
            border: "1px solid #e0e7ff",
            borderRadius: 8,
            padding: 16,
            fontSize: 10,
            color: "#555",
          }}
        >
          <b>Important Terms & Conditions</b>
          <ul style={{ marginTop: 10, paddingLeft: 20, lineHeight: 1.4 }}>
            <li>Do not add products to your Cart/Wishlist/Save for later before visiting Amazon's website/app through CashKaro</li>
            <li>If you ever had/have a Seller/Merchant/Affiliate account, you are not eligible for the Rewards</li>
            <li>GST/Amazon Business users are not eligible for Rewards on the purchase of cell phones and mobile accessories</li>
            <li>Order Amount considered for calculation of Rewards is the amount paid after subtracting GST and other charges</li>
          </ul>
          <a href="#" style={{ color: "#0059ff", fontSize: 11, textDecoration: "none" }}>
            View All Terms & Conditions &rarr;
          </a>
        </section>
      </div>
    </div>
  );
};

export default Page;