import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mai's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
