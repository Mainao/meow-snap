import type { Metadata } from "next";
import { Gaegu, Nunito } from "next/font/google";
import "./globals.css";

const gaegu = Gaegu({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "MeowSnap",
  description: "Cute polaroid camera app with a cat photographer 🐾",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${gaegu.variable} ${nunito.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
