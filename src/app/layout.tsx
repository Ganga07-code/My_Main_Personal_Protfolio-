import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Myla Gangadhar | Frontend Developer & CS Student",
  description: "Professional portfolio of Myla Gangadhar, specializing in Frontend Development, Computer Vision, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-slate-200`}>
        {children}
      </body>
    </html>
  );
}

