// BlackBoxImages.js
import React from "react";

const Blackbox = ({ images }) => {
  return (
    <div style={{ background: "#000", padding: 24, color: "#fff", borderRadius: 10 }}>
      <h2>Empty your Amazon cart &gt;&gt;</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Banner-img-${i+1}`} style={{ width: 120, height: 120 }} />
        ))}
      </div>
      <p>Wishlist &amp; Save for later section</p>
    </div>
  );
};

export default Blackbox;
