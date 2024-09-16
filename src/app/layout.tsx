import clsx from "clsx";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Footer from "@/common/components/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam McNab - Paramedic",
  description: "Sam McNab - Paramedic",
  icons: "/images/avatar.webp",
  // openGraph: {
  //   images: "/images/avatar.webp",
  //   url: "https://contact.sammcnab.co.uk",
  //   siteName: "Sam McNab - Paramedic",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://analytics.sammcnab.co.uk/script.js"
        data-website-id="c2ee1939-526f-4607-9cfb-cc19817333cf"
      />
      <body className={clsx(sora.className)}>
        <div className="min-h-screen md:min-h-fit max-w-[480px] mx-auto bg-white md:shadow-xl md:rounded-lg md:my-3 ">
          {children}
        </div>
      </body>
    </html>
  );
}
