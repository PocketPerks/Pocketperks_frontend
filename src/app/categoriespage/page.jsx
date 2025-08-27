import React from "react";

const Page = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#fff", minHeight: "100vh", padding: "20px" }}>
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: 20 }}>
        <div style={{ fontWeight: "bold", fontSize: 20, color: "#FF6600" }}>
          CASH<span style={{ color: "#0059ff" }}>KARO</span>
        </div>
        <input
          type="text"
          placeholder="Search for any brand or product"
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: 14,
          }}
        />
      </header>

      {/* Main Content Wrapper */}
      <div style={{ maxWidth: 900, margin: "auto", display: "flex", gap: 20, flexWrap: "wrap" }}>
        {/* Left side - Slider */}
        <div
          style={{
            flex: "1 1 400px",
            background: "#000",
            color: "#fff",
            borderRadius: 8,
            padding: 20,
            minHeight: 220,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ fontSize: 14, marginBottom: 8 }}>Remember to</div>
          <div style={{ fontWeight: "bold", fontSize: 22 }}>
            Empty your <br />
            Amazon cart, &gt;&gt;
          </div>
          <div style={{ fontSize: 12, marginTop: 4 }}>Wishlist & Save for later section</div>

          {/* Image */}
          <img
            src="https://i.ibb.co/6vMH27D/amazon-laptop.png"
            alt="Amazon laptop"
            style={{ position: "absolute", right: 20, bottom: 20, width: 150, height: "auto" }}
          />

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
            <div style={{ width: 24, height: 4, borderRadius: 2, backgroundColor: "#555" }}></div>
            <div style={{ width: 24, height: 4, borderRadius: 2, backgroundColor: "#aaa" }}></div>
            <div style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: "#fff" }}></div>
            <div style={{ width: 24, height: 4, borderRadius: 2, backgroundColor: "#555" }}></div>
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon logo"
              style={{ height: 24 }}
            />
            <div style={{ fontSize: 11, color: "#888" }}>
              4.8 of 5 | 1875 Ratings
            </div>
          </div>

          <p style={{ fontSize: 11, color: "#666", marginBottom: 16 }}>
            Amazon Promo Codes <br />
            Amazon, India's largest online marketplace, offers everything you need...
          </p>

          {/* Rewards section */}
          <div
            style={{
              background: "#f8faff",
              borderRadius: 6,
              padding: 12,
              fontWeight: "bold",
              fontSize: 13,
              color: "#222",
              marginBottom: 12,
            }}
          >
            Upto <span style={{ fontWeight: "900" }}>4%</span> <br />
            <span style={{ color: "#0059ff" }}>5% Rewards</span>
            <br />
            on Fashion, Mobiles, Beauty and more
          </div>

          <a
            href="#"
            style={{
              display: "inline-block",
              background: "#FF6600",
              color: "white",
              textAlign: "center",
              borderRadius: 4,
              padding: "8px 16px",
              fontWeight: "bold",
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            Earn Rewards on Amazon &rarr;
          </a>
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

export default Page;