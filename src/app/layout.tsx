import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const pixel = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "JAYZEL | Full-Stack Developer Portfolio",
  description: "Modern full-stack web applications and systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${caveat.variable} ${pixel.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}

