import type { Metadata } from "next";
import { Audiowide, Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-audiowide",
});

const golostext = Golos_Text({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-golos-text",
});

const lufga = localFont({
  src: [
    {
      path: "../public/assets/Lufga/Fontspring-DEMO-lufga-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/Lufga/Fontspring-DEMO-lufga-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/Lufga/Fontspring-DEMO-lufga-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
})

export const metadata: Metadata = {
  title: "Fashique",
  description: "Fashique Fashion Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} ${golostext.variable} ${lufga.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
