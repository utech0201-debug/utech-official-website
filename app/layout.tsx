import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "UTECH — Build. Learn. Innovate.", description: "UTECH is a technology playground for learning, building software, AI, cybersecurity and exploring the future.", metadataBase: new URL("https://utech.dev") };

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }