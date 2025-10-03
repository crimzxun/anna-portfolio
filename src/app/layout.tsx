import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

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

const pageTitle = "Anna Zheng | Portfolio";
const pageDesc = 
  "Anna Zheng is a software engineer and a Computer Science student from University of Central Florida.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
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
    icon: "./favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: pageTitle,
    description: pageDesc,
    url: "https://annazheng.vercel.app/",
    siteName: "Anna Zheng Portfolio",
    images: [
      {
        url: "/mylogo.png",
        width: 1200,
        height: 630,
        alt: "Anna Zheng - Software Engineer",
      },
    ],
  },
  metadataBase: new URL('https://annazheng.vercel.app/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 
        - min-h-screen: at least viewport height 
        - flex flex-col: stack navbar/main/footer vertically 
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {/*
            - flex-grow: expand to fill the remaining space between navbar + footer
          */}
          <main className="flex-grow">{children}</main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
