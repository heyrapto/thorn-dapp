import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/app/components/layout/Sidebar";
import { Topbar } from "@/app/components/layout/Topbar";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thorn Dapp Clone",
  description: "Recreated Thorn Dapp UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-[260px] flex flex-col min-h-screen">
            <Topbar />
            <div className="px-10 pb-10 w-full max-w-[1400px] mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}