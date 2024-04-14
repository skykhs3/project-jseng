import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Serif_KR } from "next/font/google";
import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSerifKR = Noto_Serif_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
});
export const metadata: Metadata = {
  title: "(주)정석기술연구소",
  description: "건설분쟁의 기술지원파트너",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="naver-site-verification"
        content="68d9a131b648d3344dac62d04e072a22d4a2151d"
      />
      <body className={pretendard.className + " bg-white"}>{children}</body>
    </html>
  );
}
