import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manuel Olguin | Software Developer",
  description: "My portfolio, projects, and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="bg-black relative">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
