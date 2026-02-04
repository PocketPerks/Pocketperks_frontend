import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CashKaro - India's Best Cashback & Coupons Site",
  description: "Shop online and earn cashback on every purchase. Get the best deals and save money with CashKaro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${figtree.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
