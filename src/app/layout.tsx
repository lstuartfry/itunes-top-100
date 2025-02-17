import { ViewTransitions } from "next-view-transitions";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "iTunes Top 100 Albums",
  description:
    "Browse, filter and favorite albums on the iTunes top 100 albums list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`
          ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        >
          <div className="bg-gradient-to-br from-slate-50 to-slate-300  h-screen overflow-scroll pb-12">
            {children}
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
