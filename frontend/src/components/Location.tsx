"use client";

import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Location: React.FC = () => {
  const [naverMap, setNaverMap] = useState(null);
  const [companyLoc, setCompanyLoc] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const initNaverMap = useCallback(async () => {
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_SERVICE_CLIENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const zoomCenterLoc = new (window as any).naver.maps.LatLng(
        37.4940094,
        127.014925,
      );
      const mapOptions = {
        center: zoomCenterLoc,
        zoom: 17,
        background: "#ffffff",
        scrollWheel: false,
        zoomControl: true,
        scaleControl: true,
        zoomControlOptions: {
          position: (window as any).naver.maps.Position.TOP_RIGHT,
        },
      };

      const map = new (window as any).naver.maps.Map("naver-map", mapOptions);
      const position = new (window as any).naver.maps.LatLng(
        37.494894,
        127.014925,
      );

      new (window as any).naver.maps.Marker({
        position: position,
        map: map,
        icon: {
          content: [
            '<div class="px-3 py-1 bg-primary-600/50 text-white rounded-md shadow-md text-sm font-semibold">',
            "(주) 정석기술연구소",
            "</div>",
          ].join(""),
          origin: new (window as any).naver.maps.Point(0, 0),
          anchor: new (window as any).naver.maps.Point(80, 0),
        },
      });

      new (window as any).naver.maps.Marker({
        position: position,
        map: map,
        icon: {
          url: "/icon_company_marker.png",
          size: new (window as any).naver.maps.Size(22, 35),
          origin: new (window as any).naver.maps.Point(0, 0),
          anchor: new (window as any).naver.maps.Point(11, 35),
        },
      });

      setNaverMap(map);
      setCompanyLoc(zoomCenterLoc);
    };
  }, []);

  const setMapToOriginPosition = useCallback(() => {
    if (naverMap && companyLoc) {
      (naverMap as any).setZoom(17);
      (naverMap as any).panTo(companyLoc);
    } else {
      console.log("naverMap 또는 companyLoc가 초기화되지 않았습니다.");
    }
  }, [naverMap, companyLoc]);

  useEffect(() => {
    initNaverMap();
  }, [initNaverMap]);

  const transportationOptions = [
    {
      type: "지하철",
      details: "교대역 4번 출구에서 도보 3분",
      icon: "🚇",
    },
    {
      type: "버스",
      details: "간선버스 541, 542, 740 교대역 정류장 하차",
      icon: "🚌",
    },
    {
      type: "주차",
      details: "건물 뒷편 주차 리프트 이용 가능",
      icon: "🚗",
    },
  ];

  return (
    <div className="container-custom" id="찾아오시는길">
      <section
        className={`${inView ? "animate-fadeInUp" : "opacity-0"}`}
        ref={ref}
      >
        <h2 className="heading-lg text-primary-800 mb-6">찾아오시는 길</h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* 지도 섹션 */}
          <div className="order-2 min-h-[350px] overflow-hidden rounded-lg shadow-lg lg:order-1">
            <div className="relative h-[350px] w-full md:h-full">
              <div id="naver-map" className="z-0 h-full w-full bg-white"></div>
              <button
                className="border-secondary-200 hover:bg-secondary-50 absolute right-[52px] top-[11px] z-10 flex h-[30px] w-[30px] items-center justify-center rounded-md border bg-white shadow-sm transition-all"
                onClick={setMapToOriginPosition}
                aria-label="지도 위치 초기화"
              >
                <Image
                  src="/icon_refresh.png"
                  width={15}
                  height={15}
                  alt={"새로고침"}
                />
              </button>
              <div className="absolute bottom-6 flex w-full justify-center">
                <button
                  className="flex items-center justify-center gap-2 rounded-full bg-[#04cd5c] px-6 py-2.5 font-medium text-white shadow-md transition-all hover:bg-[#03b951]"
                  onClick={() => {
                    const url = "https://naver.me/xHDN16oO";
                    window.open(url, "_blank")?.focus();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  네이버 지도에서 보기
                </button>
              </div>
            </div>
          </div>

          {/* 주소 및 교통 정보 섹션 */}
          <div className="order-1 flex flex-col space-y-6 lg:order-2">
            {/* 주소 카드 */}
            <div className="border-secondary-200 rounded-lg border bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-600 mr-3 h-8 w-8"
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
                <h3 className="text-primary-700 text-xl font-bold">
                  회사 주소
                </h3>
              </div>
              <p className="text-secondary-700 text-lg">
                서울특별시 서초구 서초중앙로24길 11
                <br />
                요셉빌딩 7F (교대역 4번 출구)
              </p>
              <div className="mt-4 flex space-x-3">
                <button
                  className="bg-secondary-100 text-secondary-800 hover:bg-secondary-200 flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "서울특별시 서초구 서초중앙로24길 11 요셉빌딩 7F",
                    );
                    alert("주소가 클립보드에 복사되었습니다.");
                  }}
                >
                  주소 복사
                </button>
                <a
                  href="tel:02-533-7753"
                  className="bg-primary-100 text-primary-800 hover:bg-primary-200 flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
                >
                  전화 (02-533-7753)
                </a>
              </div>
            </div>

            {/* 교통편 정보 */}
            <div className="border-secondary-200 rounded-lg border bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-600 mr-3 h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <h3 className="text-primary-700 text-xl font-bold">
                  오시는 방법
                </h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {transportationOptions.map((option, index) => (
                  <div key={index} className="flex items-start">
                    <span className="bg-secondary-100 mr-3 flex h-8 w-8 items-center justify-center rounded-full text-lg font-medium">
                      {option.icon}
                    </span>
                    <div>
                      <h4 className="text-secondary-800 font-bold">
                        {option.type}
                      </h4>
                      <p className="text-secondary-700">{option.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 영업시간 정보 */}
            <div className="border-secondary-200 rounded-lg border bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-600 mr-3 h-8 w-8"
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
                <h3 className="text-primary-700 text-xl font-bold">영업시간</h3>
              </div>
              <div className="border-secondary-100 flex justify-between border-b pb-2">
                <span className="text-secondary-800 font-medium">평일</span>
                <span className="text-secondary-700">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-secondary-800 font-medium">
                  주말 및 공휴일
                </span>
                <span className="text-secondary-700">휴무</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
