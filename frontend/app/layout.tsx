import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
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
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no, address=no"
        />
      </head>
      <body className={pretendard.className + " bg-white"}>{children}</body>
    </html>
  );
}
