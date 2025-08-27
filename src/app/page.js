import React from "react";
import CashbackPage from "./CashbackPage";
import Contact from "./Contact";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Contact />
      <CashbackPage />
    </div>
  );
}
