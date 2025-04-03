"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [headerStyle, setHeaderStyle] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#회사소개", label: "회사소개" },
    { href: "#사업영역", label: "사업영역" },
    { href: "#CEO인사말", label: "CEO인사말" },
    { href: "#조직도", label: "조직도" },
    { href: "#찾아오시는길", label: "찾아오시는길" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const secondPage = document.getElementById("회사소개");
      if (secondPage) {
        const isScrollPositionReachSecondPageTop =
          0 >= secondPage.getBoundingClientRect().top;
        if (isScrollPositionReachSecondPageTop) {
          setHeaderStyle(
            "bg-white bg-opacity-90 webkit-backdrop-blur-16px shadow-md",
          );
        } else {
          setHeaderStyle("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const textShadowStyle = {
    textShadow: "1px 1px 1px rgba(255, 255, 255, 1)",
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerStyle}`}
    >
      <div className="container-custom">
        <div className="flex h-[70px] items-center justify-between py-2 lg:h-[90px]">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              width={42}
              height={42}
              src="/icon_logo.png"
              alt="로고"
              className="lg:h-[50px] lg:w-[50px]"
            />
            <div>
              <h1
                className="text-primary-800 text-xl font-bold leading-tight tracking-wider lg:text-2xl"
                style={textShadowStyle}
              >
                (주)정석기술연구소
              </h1>
              <p className="text-secondary-600 text-xs font-medium lg:text-sm">
                Construction technology support
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-700 hover:text-primary-600 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="text-secondary-800 lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <nav className="pb-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-secondary-700 hover:bg-secondary-50 hover:text-primary-600 block px-4 py-2 transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
