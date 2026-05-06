import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Low Ember | Neighbourhood Restaurant & Cocktail Bar",
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
