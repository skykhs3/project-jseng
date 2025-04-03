"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";

const Location: React.FC = () => {
  const [naverMap, setNaverMap] = useState(null);
  const [companyLoc, setCompanyLoc] = useState(null);

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
            '<div class = "text-[15px] font-semibold text-black" style = "text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;">',
            "(주) 정석기술연구소",
            "</div>",
          ].join(""),
          origin: new (window as any).naver.maps.Point(0, 0),
          anchor: new (window as any).naver.maps.Point(60, 0),
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

  React.useEffect(() => {
    initNaverMap();
  }, [initNaverMap]);

  return (
    <section className="p-10 text-center md:p-16 lg:flex">
      <h2 className="mb-5 text-start text-3xl font-medium text-[#09090b] lg:min-w-80 lg:text-4xl">
        찾아오시는 길
      </h2>
      <div className="grow">
        <p className="break-keep text-start text-xl text-[#52525b]">
          서울특별시 서초구 서초중앙로24길 11 요셉빌딩 7F (교대역 4번 출구)
          <br></br>
          <br></br>
        </p>
        <div className="relative h-[350px] w-full md:h-[500px]">
          <div
            id="naver-map"
            className="z-0 h-full w-full border border-gray-200 bg-white shadow-lg"
          ></div>
          <button
            className="absolute right-[52px] top-[11px] z-0 h-[30px] w-[30px] border border-black bg-white"
            onClick={setMapToOriginPosition}
          >
            <Image
              className="m-auto"
              src="/icon_refresh.png"
              width={15}
              height={15}
              alt={"새로고침"}
            />
          </button>
          <div className="absolute bottom-6 w-full">
            <button
              className="m-auto h-[40px] w-[180px] rounded-full border border-gray-200 bg-[#04cd5c] text-base text-white shadow-md"
              onClick={() => {
                const url = "https://naver.me/xHDN16oO";
                var newWindow = window.open(url, "_blank");
                newWindow!.focus();
              }}
            >
              네이버 지도에서 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
