"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import MyEmployeeCard from "./ui/my_employee_card";
import MyDivider from "./ui/my_divider";

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);
  const [isVideo1Visible, setIsVideo1Visible] = useState(true);
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);
  const secondPageRef = useRef<HTMLDivElement | null>(null);

  const [naverMap, setNaverMap] = useState(null); // late declaration
  const [companyLoc, setCompanyLoc] = useState(null); // late declaration

  const initNaverMap = async () => {
    const script = document.createElement("script");
    script.src =
      `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_SERVICE_CLIENT_ID}` ??
      "";
    script.async = true;
    document.head.appendChild(script);

    // 스크립트가 로드된 후에 실행될 함수 정의
    script.onload = () => {
      const zoomCenterLoc = new (window as any).naver.maps.LatLng(
        37.4940094,
        127.014925,
      );

      // 지도 옵션 설정
      const mapOptions = {
        center: zoomCenterLoc,
        zoom: 17,
        background: "#ffffff",
        scrollWheel: false,
        zoomControl: true,
        scaleControl: true,
        // blankTileImage: "./image_organization_chart.png",
        zoomControlOptions: {
          //줌 컨트롤의 옵션
          position: (window as any).naver.maps.Position.TOP_RIGHT,
        },
      };

      // 지도 생성
      const map = new (window as any).naver.maps.Map("naver-map", mapOptions);

      // 마커 생성
      const position = new (window as any).naver.maps.LatLng(
        37.494894,
        127.014925,
      );

      var pinkMarker = new (window as any).naver.maps.Marker({
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

      const marker = new (window as any).naver.maps.Marker({
        position: position,
        map: map,
        icon: {
          url: "/icon_company_marker.png",
          size: new (window as any).naver.maps.Size(22, 35),
          origin: new (window as any).naver.maps.Point(0, 0),
          anchor: new (window as any).naver.maps.Point(11, 35),
        },
      });

      // setNaverMarker(marker);
      setNaverMap(map);
      setCompanyLoc(zoomCenterLoc);
    };
  };

  const initBannerTextAnimation = () => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 2000);
    const timer2 = setTimeout(() => {
      setIsAnimated2(true);
    }, 3000);
    return [timer, timer2];
  };

  const initBannerImageAnimation = () => {
    const interval = setInterval(() => {
      setIsVideo1Visible((prev) => {
        if (prev && video2Ref!.current) {
          video2Ref!.current!.currentTime = 0;
          // video2Ref!.current!.play();
        } else if (!prev && video1Ref!.current) {
          video1Ref!.current!.currentTime = 0;
          // video1Ref!.current!.play();
        }

        return !prev;
      });
    }, 10000); // 10초 간격으로 상태를 토글

    return interval;
  };

  const isScrolling = useRef(false);
  const handleScroll = (e: any) => {
    if (isScrolling.current) {
      e.preventDefault();
      return;
    }
    if (
      e.deltaY > 0 &&
      secondPageRef.current &&
      window.scrollY < secondPageRef.current.offsetTop
    ) {
      isScrolling.current = true;
      console.log(window.scrollY);
      e.preventDefault();
      setPageToSecondPage();
    }
    if (
      e.deltaY < 0 &&
      secondPageRef.current &&
      window.scrollY < secondPageRef.current.offsetTop
    ) {
      isScrolling.current = true;
      console.log(window.scrollY);
      e.preventDefault();
      setPageToFirstPage();
    }
  };

  useEffect(() => {
    initNaverMap();
    const timers = [...initBannerTextAnimation()];
    const interval = initBannerImageAnimation();

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      timers.forEach((time) => clearTimeout(time));
      clearInterval(interval);
    };
  }, []);

  const setMapToOriginPosition = useCallback(() => {
    if (naverMap && companyLoc) {
      (naverMap as any).setZoom(17);
      (naverMap as any).panTo(companyLoc);

      console.log("지도 중심 위치가 설정되었습니다.");
    } else {
      console.log("naverMap 또는 companyLoc가 초기화되지 않았습니다.");
    }
  }, [naverMap, companyLoc]);

  const setPageToFirstPage = () => {
    console.log("go");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  const setPageToSecondPage = () => {
    if (secondPageRef.current) {
      console.log("go");
      window.scrollTo({
        top: secondPageRef.current.offsetTop,
        behavior: "smooth",
      });
      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    }
  };

  const renderHeader = () => {
    const textShadowStyle = {
      textShadow: "1px 1px 1px rgba(255, 255, 255, 1)",
    };

    return (
      <header className="absolute top-0 z-10 flex w-full flex-col">
        <div className="flex h-[80px] items-center justify-center">
          <Image
            width={36}
            height={36}
            src="/icon_logo.png"
            alt="로고"
            className="lg:h-[48px] lg:w-[48px]"
          />

          <h1
            className="text-xl font-bold text-black lg:text-2xl"
            style={textShadowStyle}
          >
            (주)정석기술연구소
          </h1>
        </div>
      </header>
    );
  };

  const render배너 = () => {
    const textShadowStyle = {
      textShadow: "3px 3px 4px rgba(0, 0, 0, 0.7)",
    };
    return (
      <section className="relative h-svh">
        <div className="absolute bottom-0 flex w-full justify-center">
          <button
            className="absolute bottom-10 z-10 mx-auto animate-withArrowSlideUpDown"
            onClick={setPageToSecondPage}
          >
            <Image
              src="/icon_down_arrow.png"
              alt="아래 방향 화살표"
              width={40}
              height={40}
            />
          </button>
        </div>
        <div className="absolute z-10 mt-20 flex w-full flex-col justify-center p-6 lg:p-10">
          <p
            className={`text-2xl font-light text-white md:text-2xl lg:text-4xl ${isAnimated ? "animate-fadeInUp" : "collapse"}`}
            style={textShadowStyle}
          >
            건설 분쟁 컨설팅 전문
          </p>
          <div className="h-6"></div>
          <p
            className={`text-[38px] font-light text-white md:text-[50px] lg:text-[70px] ${isAnimated2 ? "animate-fadeInUp" : "collapse"}`}
            style={textShadowStyle}
          >
            건축시공기술사와
            <br />
            건축사가
            <br />
            함께합니다.
          </p>
        </div>
        <div className="relative flex h-full w-full justify-center">
          <video
            ref={video1Ref}
            autoPlay={true}
            playsInline={true}
            muted={true}
            loop={true}
            className={`absolute z-0 h-full w-full animate-withBannerWidthExpand object-cover transition-opacity duration-[2000ms] ease-in ${isVideo1Visible ? "opacity-100" : "opacity-0"}`}
          >
            <source src="/video_banner1_small.mp4" type="video/mp4" />
          </video>
          <video
            ref={video2Ref}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            className={`absolute z-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-in ${isVideo1Visible ? "opacity-0" : "opacity-100"}`}
          >
            <source src="/video_banner2_small.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    );
  };

  const render회사소개 = () => (
    <section
      className="animate-fadeInUp p-10 text-center lg:flex"
      ref={secondPageRef}
    >
      <h2 className="mb-5 text-3xl text-[#09090b] lg:min-w-80 lg:text-4xl">
        회사 소개
      </h2>
      <p className="text-start text-base text-[#52525b] lg:text-xl">
        정석 기술 연구소는 건축, 토목, 엔지니어링, 건축물 하자진단, 안전진단,
        계측, 구조설계 및 법원 감정평가 등 다양한 건설 관련 서비스를 제공합니다.
        고객의 요구에 맞춘 최고의 솔루션을 제공하여 안전하고 효율적인 건축
        환경을 구축하는 데 앞장서고 있습니다.
      </p>
    </section>
  );

  const render회사주요업무 = () => (
    <section className="animate-fadeInUp p-10 text-center lg:flex">
      <h2 className="mb-5 text-3xl text-[#09090b] lg:min-w-80 lg:text-4xl">
        회사 주요업무
      </h2>
      <div className="flex-row">
        <div className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
          건설분쟁·하자소송 기술(송무)지원 업무
        </div>
        <p className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
          준공도서 사전검토 용역 업무
        </p>
        <p className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
          법원 공사비 감정·분석 및 컨설팅 업무
        </p>
        <p className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
          하자조사 타당성 검토·분석 업무
        </p>
        <p className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
          준공시 하자 민원에 대한 컨설팅
        </p>
        <p className="m-auto pb-2 text-center text-base text-[#52525b] md:text-xl lg:pb-4 lg:text-start lg:text-3xl ">
          협력업체 공사중단시 대응방안 자문
        </p>
        <p className="text-center text-base text-[#52525b] md:text-xl lg:text-start lg:text-3xl">
          건설기술인 직무 교육(하자리스크 최소화)
        </p>
      </div>
    </section>
  );

  const render조직도 = () => (
    <section className="h-auto w-auto p-3 lg:p-10">
      <Image
        src="/image_organization_chart.png"
        alt="조직도"
        width={2000}
        height={2000}
        className="m-auto w-full max-w-5xl"
      />
    </section>
  );

  const render임직원현황 = () => (
    <section className="p-10 text-center lg:flex">
      <h2 className="mb-5 text-3xl text-[#09090b] lg:min-w-80 lg:text-4xl">
        임직원 현황
      </h2>
      <div className="relative flex flex-wrap justify-evenly">
        {MyEmployeeCard({
          name: "김종석",
          position: "대표이사",
          subPosition: "",
          script: [
            "광운대학교 법무대학원 석사",
            "법원감정인(건축시공기술사)",
            "1군 건설사 현장시공 15년",
            "1군 건설사 CS 및 품질 팀장",
            "1군 건설사 법무팀장",
            "피고측 법무법인 기술총괄 본부장",
            "(하자소송외 700건, 준공도서용역 100건)",
            "SK하이닉스 품질, 안전자문위원",
            "광운대 법무대학원 27대 원우회회장",
            "건설중재 전문가 아카데미 제 20기",
          ],
          imageSrc: "/image_kimjongseok.png",
        })}
        {MyEmployeeCard({
          name: "이건후",
          position: "이사",
          subPosition: "",
          script: [
            "정석기술연구소 기술담당 이사",
            "광운대학교 건설법무대학원 석사",
            "건축기사/특급기술사(시공, 품질, 건설사업관리)",
            "범양건영(주) 품질안전팀/ CS팀 근무",
            "(주)한양 기술개발팀(견적담당 근무)",
            "(주)동양건설산업 건축팀/ 건축견적팀/ CS팀 근무",
            "LH아파트 외 아파트, 주상복합, 오피스텔 현장 수행",
          ],
          imageSrc: "/icon_logo2.png",
        })}
        {MyEmployeeCard({
          name: "강민주",
          position: "부장",
          subPosition: "연구소 소장",
          script: [
            "정석기술연구소 기술송무 총괄 담당",
            "건축사 / 법원 감정인",
            "엔지니어링 회사 기술송무 (실적 200개 현장)",
            "해안종합건축사사무소 근무(주상복합 및 LH공동주택 설계)",
          ],
          imageSrc: "/icon_logo2.png",
        })}
        {MyEmployeeCard({
          name: "김도영",
          position: "부장",
          subPosition: "",
          script: [
            "정석기술연구소 송무담당/준공도서",
            "건축기사 / 특급기술자",
            "엔지니어링 회사 기술송무/준공도서 검토용역 공무",
            "아파트, 주상복합현장 공사/공무 수행",
            "동양건설사업 CS팀 (30개 현장 1만 세대 담당)",
          ],
          imageSrc: "/icon_logo2.png",
        })}
        {MyEmployeeCard({
          name: "김미지",
          position: "대리",
          subPosition: "",
          script: ["송무·적산 담당", "건축기사 / 토목기사"],
          imageSrc: "/icon_logo2.png",
        })}
      </div>
    </section>
  );

  const render주요실적현황 = () => (
    <section className="p-10 text-center lg:flex">
      <h2 className="mb-5 text-3xl text-[#09090b] lg:min-w-80 lg:text-4xl">
        주요 실적 현황
      </h2>
    </section>
  );

  const render찾아오시는길 = () => (
    <section className="p-10 text-center lg:flex">
      <h2 className="mb-5 text-3xl text-[#09090b] lg:min-w-80 lg:text-4xl">
        찾아오시는 길
      </h2>

      <div className="relative h-[400px] w-full md:h-[500px] ">
        <div
          id="naver-map"
          className="h-full w-full rounded-lg border border-gray-200 bg-white shadow-md "
        ></div>
        <button
          className="absolute right-[52px] top-[11px] z-10 h-[30px] w-[30px] border border-black bg-white"
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
    </section>
  );

  const renderFooter = () => (
    <footer className="p-4 text-center text-slate-700">
      <p className="text-sm">
        서울특별시 서초구 서초중앙로24길 11 (우)06604
        <br className="hidden max-sm:block" />
        <span className="inline max-sm:hidden"> / </span>
        TEL 02-533-7753
        <br className="hidden max-sm:block" />
        <span className="inline max-sm:hidden"> / </span>
        FAX 02-533-7752
        <br className="hidden max-sm:block" />
        <span className="inline max-sm:hidden"> / </span>
        E-mail jseng@jseng.co.kr
        <br />
        정석기술연구소
        <br className="hidden max-sm:block" />
        <span className="inline max-sm:hidden"> / </span>
        사업자등록번호: 126-88-02894
        <br className="hidden max-sm:block" />
        <span className="inline max-sm:hidden"> / </span>
        대표자: 김종석
      </p>
    </footer>
  );

  return (
    <div className="flex min-h-screen flex-col">
      {renderHeader()}
      <main>
        {render배너()}
        {render회사소개()}
        <MyDivider />
        {render회사주요업무()}
        <MyDivider />
        {render조직도()}
        <MyDivider />
        {render임직원현황()}
        <MyDivider />
        {render주요실적현황()}
        <MyDivider />
        {render찾아오시는길()}
      </main>
      {renderFooter()}
    </div>
  );
}
