import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/component/Nav";
import Footer from "@/component/Footer";
import { Toast } from "@heroui/react";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Idea Vault",
  description: "Share your innovative startup idea",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white dark:bg-[#171717] 
text-black dark:text-white
border-orange-300 dark:border-orange-700"
      >
        <Providers>
          <Toaster position="top-center" reverseOrder={false}></Toaster>
          <Nav></Nav>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
