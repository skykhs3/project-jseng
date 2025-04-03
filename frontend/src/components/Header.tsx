"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [headerStyle, setHeaderStyle] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const secondPage = document.getElementById("회사소개");
      if (secondPage) {
        const isScrollPositionReachSecondPageTop =
          0 >= secondPage.getBoundingClientRect().top;
        if (isScrollPositionReachSecondPageTop) {
          setHeaderStyle(
            "bg-white bg-opacity-70 webkit-backdrop-blur-16px shadow-lg",
          );
        } else {
          setHeaderStyle("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textShadowStyle = {
    textShadow: "1px 1px 1px rgba(255, 255, 255, 1)",
  };

  return (
    <header className={`fixed top-0 z-10 flex w-full flex-col ${headerStyle}`}>
      <div className="flex h-[60px] items-center justify-center lg:h-[80px]">
        <Image
          width={36}
          height={36}
          src="/icon_logo.png"
          alt="로고"
          className="lg:h-[48px] lg:w-[48px]"
        />
        <div>
          <h1
            className="text-center text-xl font-bold leading-tight tracking-widest text-black lg:text-2xl"
            style={textShadowStyle}
          >
            (주)정석기술연구소
          </h1>
          <h2 className="text-center text-xs font-normal leading-tight lg:text-sm">
            Construction technology support
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
