import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashika Gurunayake | Portfolio",
  description: "Portfolio of Shashika Gurunayake, a software engineer specializing in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.variable} font-sans min-h-full flex flex-col bg-background text-foreground overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
