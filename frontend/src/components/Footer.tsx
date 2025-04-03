"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <Image
                width={36}
                height={36}
                src="/icon_logo.png"
                alt="로고"
                className="brightness-200"
              />
              <h3 className="text-lg font-medium text-white">
                (주)정석기술연구소
              </h3>
            </div>
            <p className="text-sm leading-relaxed">
              건설분쟁·하자소송 기술(송무)지원 업무, 준공도서 사전검토, 법원
              공사비 감정·분석
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">연락처</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-400 mr-2 mt-0.5 h-5 w-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <span>TEL: </span>
                  <a
                    href="tel:02-533-7753"
                    className="text-primary-300 hover:text-primary-200 transition"
                  >
                    02-533-7753
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-400 mr-2 mt-0.5 h-5 w-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <div>
                  <span>FAX: </span>
                  <a
                    href="tel:02-533-7752"
                    className="text-primary-300 hover:text-primary-200 transition"
                  >
                    02-533-7752
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-400 mr-2 mt-0.5 h-5 w-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <span>Email: </span>
                  <a
                    href="mailto:jseng@jseng.co.kr"
                    className="text-primary-300 hover:text-primary-200 transition"
                  >
                    jseng@jseng.co.kr
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">주소</h3>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary-400 mr-2 mt-0.5 h-5 w-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <address className="text-sm not-italic leading-relaxed">
                서울특별시 서초구 서초중앙로24길 11
                <br />
                요셉빌딩 7F
                <br />
                (우)06604
              </address>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">영업시간</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-400 mr-2 mt-0.5 h-5 w-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p>월요일 - 금요일</p>
                  <p>09:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-400 mr-2 mt-0.5 h-5 w-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <div>
                  <p>토요일, 일요일, 공휴일</p>
                  <p>휴무</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-secondary-800 text-secondary-500 mt-12 border-t pt-8 text-center text-xs">
          <p>
            © {currentYear} (주)정석기술연구소. 대표자: 김종석. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
