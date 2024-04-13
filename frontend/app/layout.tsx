import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSerifKR = Noto_Serif_KR({ weight: ["400","500","700"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Garden",
  description: "정원이만을 위한 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSerifKR.className}>{children}</body>
    </html>
  );
}
