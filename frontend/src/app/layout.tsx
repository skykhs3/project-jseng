import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Head from "next/head";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap", // Adding font-display swap for better performance
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=1"
        />
        <link rel="manifest" href="/site.webmanifest?v=1" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=1"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />

        <meta name="apple-mobile-web-app-title" content="(주)정석기술연구소" />
        <meta name="application-name" content="(주)정석기술연구소" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          name="naver-site-verification"
          content="87f8d9d318bd413e98fb8045f87e63b644cdeffb"
        />
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
      <body className={`${pretendard.className} bg-white`}>{children}</body>
    </html>
  );
}
