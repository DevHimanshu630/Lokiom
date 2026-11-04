import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lokiom · Many crafts. One signature. Infinite stories.",
  description:
    "Objects made by named people in named places. Blue pottery from Khurja, stone inlay from Agra, brocade from Varanasi, chikankari from Lucknow.",
  icons: { icon: "/assets/mark-oxblood.png" },
  openGraph: {
    title: "Lokiom",
    description: "Many crafts. One signature. Infinite stories.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
