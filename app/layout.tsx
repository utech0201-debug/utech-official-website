import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = { title: "UTECH — Build. Learn. Innovate.", description: "UTECH is a technology playground for learning, building software, AI, cybersecurity and exploring the future.", metadataBase: new URL("https://utech.dev") };

export default function RootLayout({children}:{children:ReactNode}) { return <html lang="en"><body className={`${dmSans.variable} ${spaceGrotesk.variable}`}>{children}</body></html>; }