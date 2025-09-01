import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans, Poppins, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anna Zheng | Portfolio",
  description: "Anna Zheng is a software engineer and a Computer Science student from University of Central Florida.",
  keywords: [
    "Anna Zheng",
    "Software Engineer",
    "Web Development",
    "Full-stack",
    "Game Development",
    "University of Central Florida",
    "Univ. of Central Florida",
    "UCF",
    "Society of Hispanic Professional Engineers",
    "SHPE",
    "SHPE UCF",
    "Knight Hacks",
    "Computer Science"
  ],
  authors: [{ name: "Anna Zheng" }],
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    title: "Anna Zheng | Portfolio",
    description: "Anna Zheng is a software engineer and a Computer Science student from University of Central Florida.",
    url: "https://annazheng.dev",
    siteName: "Anna Zheng Portfolio",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Anna Zheng - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL('https://annazheng.dev'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
        - min-h-screen: at least viewport height 
        - flex flex-col: stack navbar/main/footer vertically 
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} ${poppins.variable} ${sourceCodePro.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />

        {/*
          - flex-grow: expand to fill the remaining space between navbar + footer
        */}
        <main className="flex-grow">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
