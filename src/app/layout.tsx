import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const syne = Syne({
  subsets: ["latin"],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Myla Gangadhar | Frontend Developer | Internship Ready 2026",
  description: "High-performance Frontend Developer and CS Student specializing in React, Next.js, and AI-driven web applications. Explore my projects and technical expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased bg-[#030712] text-slate-200`}>
        {children}
      </body>
    </html>
  );
}

