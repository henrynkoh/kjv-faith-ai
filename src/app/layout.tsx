import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AuthButton from "@/components/AuthButton";
import CreditDisplay from "@/components/CreditDisplay";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rightly Dividing the Word | KJV Bible AI Tool",
  description:
    "Study to shew thyself approved unto God — AI-powered KJV Bible verse insights, explanations, and prayers centered on 2 Timothy 2:15.",
  keywords: ["KJV", "Bible", "AI", "rightly dividing", "2 Timothy 2:15"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50`}
      >
        <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-blue-100">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-blue-900 font-serif font-bold text-lg hover:text-blue-700 transition-colors"
            >
              <BookOpen className="h-6 w-6" />
              <span className="hidden sm:inline">Rightly Dividing</span>
            </Link>
            <div className="flex items-center gap-3">
              <CreditDisplay />
              <AuthButton />
            </div>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
        <footer className="border-t border-blue-100 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Rightly Dividing the Word. Built
              with faith &amp; AI.
            </p>
            <p className="mt-1">
              <Link href="/subscribe" className="hover:underline">
                Subscribe
              </Link>{" "}
              &middot; KJV Bible &middot; 2 Timothy 2:15
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
