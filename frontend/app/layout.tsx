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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <meta
        name="naver-site-verification"
        content="87f8d9d318bd413e98fb8045f87e63b644cdeffb"
      />
      <head>
        <title>(주)정석기술연구소</title>
        <meta
          name="description"
          content="건설분쟁·하자소송 기술(송무)지원 업무, 준공도서 사전검토, 법원 공사비 감정·분석"
        />
        <meta property="og:title" content="(주)정석기술연구소" />
        <meta
          property="og:description"
          content="건설분쟁·하자소송 기술(송무)지원 업무, 준공도서 사전검토, 법원 공사비 감정·분석"
        />
        <meta
          property="og:image"
          content="https://jseng.fly.dev/icon_logo.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jseng.fly.dev/" />
      </head>
      <body className={pretendard.className + " bg-white"}>{children}</body>
    </html>
  );
}
