// app/layout.js
"use client";

import "./globals.css";
import { ReactNode } from "react";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body>{children}</body>
    </html>
  );
}
