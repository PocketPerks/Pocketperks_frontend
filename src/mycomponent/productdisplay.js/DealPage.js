import React from "react";
import { useNavigate } from "react-router-dom";

export default function DealPage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login"); // Click karte hi login page pe bhej dega
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Amazon - Upto 5% Cashback</h1>

      {/* Image */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon"
        style={{ width: "150px", marginBottom: "20px" }}
      />

      {/* Offer Box */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          maxWidth: "400px",
        }}
      >
        <p>
          Get upto <b>5% Rewards</b> on your Amazon shopping via our platform.
        </p>
        <p>
          <b>Valid On:</b> Fashion, Mobiles, Beauty & more.
        </p>

        <button
          onClick={goToLogin}
          style={{
            backgroundColor: "#FF6600",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Grab Deal →
        </button>
      </div>

      {/* Terms */}
      <div style={{ marginTop: "20px", maxWidth: "500px" }}>
        <h3>Important Terms & Conditions</h3>
        <ul>
          <li>Do not add products to cart before visiting via our site</li>
          <li>No rewards for Amazon Business accounts</li>
          <li>Rewards will be confirmed within 30 days</li>
        </ul>
      </div>
    </div>
  );
}
