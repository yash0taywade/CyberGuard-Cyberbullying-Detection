import type { Metadata } from "next";
import ThemeRegistry from "@/components/layout/ThemeRegistry";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberGuard — Cyberbullying Detection System",
  description:
    "Detect cyberbullying and toxic content in text using AI-powered analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          <main>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
