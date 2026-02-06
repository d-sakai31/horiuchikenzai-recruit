import type { Metadata } from "next";
import { SEO, COMPANY } from "@/data/company";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
    siteName: `${COMPANY.nameShort} 採用情報`,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-text-main antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
