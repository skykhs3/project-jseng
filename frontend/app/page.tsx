"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import MyEmployeeCard from "./ui/my_employee_card";
import MyDivider from "./ui/my_divider";
import { useInView } from "react-intersection-observer";
import useSmoothScroll from "./utils/my_scroll";

export default function Home() {
  const [bannerState, setBannerState] = useState({
    isText1Animated: false,
    isText2Animated: false,
    isVideo1Visible: true,
  });

  const [headerCssStyle, setHeaderCssStyle] = useState<string>("");

  const bannerVideo1Ref = useRef<HTMLVideoElement | null>(null);
  const bannerVideo2Ref = useRef<HTMLVideoElement | null>(null);
  const secondPageRef = useRef<HTMLDivElement | null>(null);
  const { setScrollPosition, isScrolling } = useSmoothScroll();

  const startY = useRef<number | null>(null);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [naverMap, setNaverMap] = useState(null);
  const [companyLoc, setCompanyLoc] = useState(null);

  const initNaverMap = async () => {
    const script = document.createElement("script");
    script.src =
      `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_SERVICE_CLIENT_ID}` ??
      "";
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
  };

  const initBannerTextAnimation = () => {
    const timer = setTimeout(() => {
      setBannerState((prev) => ({ ...prev, isText1Animated: true }));
    }, 2000);
    const timer2 = setTimeout(() => {
      setBannerState((prev) => ({ ...prev, isText2Animated: true }));
    }, 3000);
    return [timer, timer2];
  };

  const initBannerImageAnimation = () => {
    const interval = setInterval(() => {
      setBannerState((prev) => {
        if (prev.isVideo1Visible && bannerVideo2Ref.current) {
          bannerVideo2Ref.current.currentTime = 0;
        } else if (!prev.isVideo1Visible && bannerVideo1Ref.current) {
          bannerVideo1Ref.current.currentTime = 0;
        }
        return { ...prev, isVideo1Visible: !prev.isVideo1Visible };
      });
    }, 10000);
    return interval;
  };

  const handleWheelEvent = useCallback((e: WheelEvent) => {
    if (isScrolling.current) {
      e.preventDefault();
      return;
    }
    if (
      secondPageRef.current &&
      secondPageRef.current.getBoundingClientRect().top > 0
    ) {
      const scrollDirection = e.deltaY > 0;
      isScrolling.current = true;
      e.preventDefault();
      scrollDirection
        ? setScrollPositionToSecondPage()
        : setScrollPosition(0, 1000);
    }
  }, []);

  const handleScrollEvent = useCallback(() => {
    if (secondPageRef.current) {
      const isScrollPositionReachSecondPageTop =
        0 >= secondPageRef.current.getBoundingClientRect().top;
      if (isScrollPositionReachSecondPageTop) {
        setHeaderCssStyle(
          "bg-white bg-opacity-70 webkit-backdrop-blur-16px shadow-lg",
        );
      } else {
        setHeaderCssStyle("");
      }
    }
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    startY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isScrolling.current || !startY.current) {
      return;
    }
    console.log("touchmove");
    const currentY = e.touches[0].clientY;
    const deltaY = startY.current - currentY;
    console.log(deltaY);
    console.log(
      "current " + secondPageRef!.current!.getBoundingClientRect().top,
    );

    if (
      secondPageRef.current &&
      secondPageRef.current.getBoundingClientRect().top > 1 // safari
    ) {
      const scrollDirection = deltaY > 0;
      isScrolling.current = true;
      if (e.cancelable) {
        e.preventDefault();
      }
      scrollDirection
        ? setScrollPositionToSecondPage()
        : setScrollPosition(0, 1000);
    }
  }, []);

  useEffect(() => {
    initNaverMap();

    window.addEventListener("wheel", handleWheelEvent, { passive: false });
    window.addEventListener("scroll", handleScrollEvent, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    const timers = [...initBannerTextAnimation()];
    const interval = initBannerImageAnimation();

    return () => {
      timers.forEach((time) => clearTimeout(time));
      clearInterval(interval);
      window.removeEventListener("wheel", handleWheelEvent);
      window.removeEventListener("scroll", handleScrollEvent);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleWheelEvent, handleScrollEvent]);

  const setMapToOriginPosition = useCallback(() => {
    if (naverMap && companyLoc) {
      (naverMap as any).setZoom(17);
      (naverMap as any).panTo(companyLoc);
    } else {
      console.log("naverMap 또는 companyLoc가 초기화되지 않았습니다.");
    }
  }, [naverMap, companyLoc]);

  const setScrollPositionToSecondPage = () => {
    if (secondPageRef.current) {
      const element = secondPageRef.current;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      setScrollPosition(elementPosition, 1000);
    }
  };

  const renderHeader = () => {
    const textShadowStyle = {
      textShadow: "1px 1px 1px rgba(255, 255, 255, 1)",
    };

    return (
      <header
        className={`fixed top-0 z-10 flex w-full flex-col ${headerCssStyle}`}
      >
        <div
          className={`flex h-[60px] items-center justify-center lg:h-[80px]`}
        >
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

  const renderBanner = () => {
    const textShadowStyle = {
      textShadow: "3px 3px 4px rgba(0, 0, 0, 0.7)",
    };
    return (
      <section className="relative h-svh">
        <div className="absolute bottom-0 flex w-full justify-center">
          <button
            className="absolute bottom-10 z-10 mx-auto animate-withArrowSlideUpDown"
            onClick={setScrollPositionToSecondPage}
          >
            <Image
              src="/icon_down_arrow.png"
              alt="아래 방향 화살표"
              width={40}
              height={40}
            />
          </button>
        </div>
        <div className="absolute z-10 mt-20 flex w-full flex-col justify-center p-10 text-white md:p-16">
          <p
            className={`text-2xl font-medium md:text-3xl lg:text-4xl ${bannerState.isText1Animated ? "animate-fadeInUp" : "collapse"}`}
          >
            건설 분쟁 컨설팅 전문
          </p>
          <div className="h-6 md:h-7 lg:h-8"></div>
          <p
            className={`text-[38px] font-medium md:text-[50px] lg:text-[70px] ${bannerState.isText2Animated ? "animate-fadeInUp" : "collapse"}`}
          >
            건축시공기술사<span className="hidden min-[350px]:inline">와</span>
            <br />
            건축사가
            <br />
            함께합니다
          </p>
        </div>
        <div className="relative flex h-full w-full justify-center">
          <video
            ref={bannerVideo1Ref}
            autoPlay={true}
            playsInline={true}
            muted={true}
            loop={true}
            preload="auto"
            className={`absolute z-0 h-full w-full animate-withBannerWidthExpand object-cover transition-opacity duration-[2000ms] ease-in translate-z-0 ${bannerState.isVideo1Visible ? "opacity-100" : "opacity-0"}`}
          >
            <source src="/video_banner1_tiny.mp4" type="video/mp4" />
          </video>
          <video
            ref={bannerVideo2Ref}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            preload="auto"
            className={`absolute z-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-in translate-z-0 ${bannerState.isVideo1Visible ? "opacity-0" : "opacity-100"}`}
            style={{ transform: "translateZ(0)" }}
          >
            <source src="/video_banner2_tiny.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    );
  };

  const render회사소개 = () => (
    <section
      className="p-10 text-center md:p-16"
      ref={secondPageRef}
      id="회사소개"
    >
      <div
        className={`pt-[60px] opacity-0 lg:flex lg:pt-[80px] ${inView1 ? "animate-fadeInUp animate-delay-300ms" : ""}`}
        ref={ref1}
      >
        <h2
          className={`mb-5 text-start text-3xl font-medium text-[#09090b] lg:min-w-80 lg:text-4xl`}
        >
          회사 소개
        </h2>
        <p className="break-keep text-start text-xl leading-7 text-[#52525b] lg:text-2xl">
          <span className="font-medium text-black">정석기술연구소</span>
          는 건축, 토목, 엔지니어링, 건축물 하자진단, 안전진단, 법원 감정평가 등
          다양한 건설 관련 서비스를 제공합니다.
          <br />
          <br />
          <span className="font-medium text-black">정석기술연구소</span>는 설계,
          시공, 견적, 안전, 품질, CS, 법무분야의 건설사에서 근무한 기술자들로
          이루어져 있습니다. 전문 역량을 쌓은 전문 기술자들로 구성된{" "}
          <span className="font-medium text-black">
            국내 최고의 엔지니어링 회사
          </span>
          입니다.
        </p>
      </div>
    </section>
  );

  const 업무내용 = [
    {
      title: "건설분쟁·하자소송 기술(송무)지원 업무",
      description:
        "건설 과정에서 발생하는 분쟁이나 하자 문제에 대해 전문적인 기술 지원을 제공하여 고객의 권익을 보호합니다.",
    },
    {
      title: "준공도서 사전검토 용역 업무",
      description:
        "건설 프로젝트의 준공도서를 철저히 검토하여 하자 및 문제 발생을 사전에 예방합니다.",
    },
    {
      title: "법원 하자 감정 분석 및 컨설팅 업무",
      description:
        "법원이 요구하는 하자 감정 및 분석을 통해 공정한 판결을 지원합니다.",
    },
    {
      title: "하자조사 타당성 검토·분석 업무",
      description:
        "건축물의 하자조사 결과에 대한 타당성을 검토하고 분석하여 신뢰성 있는 보고서를 제공합니다.",
    },
    {
      title: "준공시 하자 민원에 대한 컨설팅",
      description:
        "준공 시 발생할 수 있는 하자 민원에 대해 전문가의 컨설팅을 통해 신속한 문제 해결을 지원합니다.",
    },
    {
      title: "공사비 분쟁사건 기술 지원 업무",
      description:
        "공사비 분쟁 사건에 대한 기술적인 지원을 제공하여 분쟁 해결을 돕습니다.",
    },
    {
      title: "건설기술인 직무 교육(하자리스크 최소화)",
      description:
        "건설기술인을 대상으로 한 직무 교육을 통해 하자 리스크를 최소화하고, 품질 향상을 위한 지식을 전파합니다.",
    },
  ];

  const render회사주요업무 = () => (
    <section
      className={`p-10 text-center opacity-0 md:p-16 lg:flex ${inView2 ? "animate-fadeInUp animate-delay-1s" : ""}`}
      ref={ref2}
    >
      <h2 className="mb-5 text-start text-3xl font-medium text-[#09090b] lg:min-w-80 lg:text-4xl">
        주요 업무
      </h2>
      <ul className="list-outside">
        {업무내용.map((item, index) => (
          <>
            {index > 0 && <div className="h-7 lg:h-8"></div>}
            <li
              key={index}
              className="m-auto list-hyphen break-keep text-start text-base text-[#52525b] lg:text-xl"
            >
              <span className="text-xl font-medium text-black lg:text-2xl">
                {item.title}
              </span>
              <br />
              {item.description}
            </li>
          </>
        ))}
      </ul>
    </section>
  );

  const render대표가직접뛰는회사 = () => {
    let images = [
      {
        imageUrl: "/image_horizontal1.jpeg",
        description:
          "(주)KCC건설 소장 및 팀장 대상 하자 분쟁 대응방안 교육 연사",
        image_position: "object-center",
      },
      {
        imageUrl: "/image_horizontal2.jpeg",
        description:
          "(주)KCC건설 소장 및 팀장 대상 하자 분쟁 대응방안 교육 연사",
        image_position: "object-center",
      },
      {
        imageUrl: "/image_horizontal4.png",
        description:
          "LH 한국토지주택공사 주택품질·분쟁관리 전문가 초청강연 연사",
        image_position: "object-right",
      },
      {
        imageUrl: "/image_horizontal3.png",
        description:
          "LH 한국토지주택공사 주택품질·분쟁관리 전문가 초청강연 연사",
        image_position: "object-bottom",
      },
      {
        imageUrl: "/image_horizontal5.jpeg",
        description: "1군 건설사 CS협의체 하자소송 대응방안 강연",
        image_position: "object-center",
      },
      {
        imageUrl: "/image_horizontal6.jpeg",
        description: "1군 건설사 CS협의체 하자소송 대응방안 강연",
        image_position: "object-[center_right]",
      },
    ];
    images = [...images, ...images];

    const widthForSmallScreen = `w-[3840px]`;
    const widthForMediumScreen = `md:w-[3984px]`;
    const widthForLargeScreen = `lg:w-[7584px]`;

    return (
      <div className="relative w-full overflow-hidden pb-10 md:pb-16">
        <h2
          className={`p-10 pb-5 text-start text-3xl font-medium text-[#09090b] md:p-16 md:pb-8 lg:min-w-80 lg:text-4xl`}
        >
          대표가 직접 뛰는 회사
        </h2>
        <div
          className={`overflow flex ${widthForSmallScreen} animate-horizontalSlide flex-row ${widthForMediumScreen} ${widthForLargeScreen}`}
        >
          {images.map((src, index) => (
            <div key={index} className="flex flex-row">
              <div className="w-[20px] flex-shrink-0 md:w-[32px] lg:w-[50px]"></div>
              <div className="w-[300px] lg:w-[600px]">
                <div className="sh relative h-[400px] border border-gray-200 shadow-lg">
                  <Image
                    src={src.imageUrl}
                    alt={`Slide ${index}`}
                    width={1000}
                    height={1000}
                    className={`h-full w-full object-cover ${src.image_position} translate-z-0`}
                  />
                </div>
                <p className="w-full break-keep pt-2 text-center text-base translate-z-0 lg:text-xl">
                  {src.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const render임직원현황 = () => (
    <section className="p-10 text-center md:p-16 lg:flex">
      <h2 className="mb-5 text-start text-3xl font-medium text-[#09090b] lg:min-w-80 lg:text-4xl">
        임직원 현황
      </h2>
      <div>
        <p className="break-keep text-start text-xl text-[#52525b]">
          <span className="font-medium text-black">정석기술연구소</span>는{" "}
          <span className="font-medium text-black">
            모든 직원이 건설사 및 설계사 근무 경력을 보유한 전문가들로 구성된
            국내 유일의 엔지니어링 회사
          </span>
          입니다. <br></br>
          <br></br>전 직원이{" "}
          <span className="font-medium text-black">
            건설분쟁 엔지니어링 회사에서 다년간 근무한 경험
          </span>
          을 바탕으로, 고객에게 최상의 서비스를 제공합니다.
          <br></br>
          <br></br>
        </p>
        <div className="relative grid flex-grow grid-cols-1 justify-evenly gap-4 min-[500px]:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {MyEmployeeCard({
            name: "김종석",
            position: "대표이사",
            subPosition: "",
            script: [
              "법원감정인(건축시공 기술사)",
              "대한상사중재원 중재인",
              "파주시청 건축 등 심의 위원",
              "광운대학교 건설법무대학원 법학 석사",
              "LH하자소송 자문위원",
              "1군 건설사 CS 및 품질 팀장",
              "1군 건설사 법무 팀장",
              "피고측 법무법인 기술총괄 본부장",
              "(하자소송외 700건, 준공도서용역 100건",
              "광운대 법무대학원 27대 원우회 회장",
              "대한상사중재원 아카데미 사무총장",
            ],
            imageSrc: "/image_kimjongseok.jpg",
            objectPosition: "object-top",
          })}
          {MyEmployeeCard({
            name: "이건후",
            position: "이사",
            subPosition: "기술담당 이사 / 준공도서",
            script: [
              "광운대학교 건설법무대학원 석사",
              "건축기사/특급기술자(시공, 품질, 건설사업관리)",
              "범양건영(주) 품질안전팀/ CS팀 근무",
              "(주)한양 기술개발팀(견적담당) 근무",
              "(주)동양건설산업 건축팀/ 견적팀/ CS팀 근무",
              "LH외 아파트, 주상복합, 오피스텔 현장 근무",
            ],
            imageSrc: "/icon_logo2.png",
          })}
          {MyEmployeeCard({
            name: "강민주",
            position: "부장",
            subPosition: "기술송무 총괄 담당",
            script: [
              "건축사/법원 감정인",
              "엔지니어링 회사 기술송무 (실적 200개 현장)",
              "해안종합건축사사무소 근무(주상복합 및 LH공동주택 설계)",
            ],
            imageSrc: "/icon_logo2.png",
          })}
          {MyEmployeeCard({
            name: "김도영",
            position: "부장",
            subPosition: "송무담당 / 준공도서",
            script: [
              "건축기사 / 특급기술자",
              "엔지니어링 회사 기술송무/준공도서 검토용역 공무",
              "아파트, 주상복합현장 공사/공무 수행",
              "(주)동양건설사업 CS팀 (30개 현장 1만 세대 담당)",
            ],
            imageSrc: "/icon_logo2.png",
          })}
          {MyEmployeeCard({
            name: "김미지",
            position: "대리",
            subPosition: "송무담당 / 감정서 작성",
            script: [
              "건축기사 / 토목기사 / 건설재료 시험기사",
              "엔지니어링 회사 기술송무 / 감정 업무",
              "BIM 적산, 물량 산출",
              "(주)동양건설산업 현장 시공",
            ],
            imageSrc: "/icon_logo2.png",
          })}
        </div>
      </div>
    </section>
  );

  const render찾아오시는길 = () => (
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
        <div className="relative h-[350px] w-full md:h-[500px] ">
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

  const renderFooter = () => (
    <footer className="p-4 text-center text-slate-700">
      <div className="text-sm">
        서울특별시 서초구 서초중앙로24길 11 요셉빌딩 7F (우)06604
        <br className="hidden max-[800px]:block" />
        <span className="inline max-[800px]:hidden"> / </span>
        TEL:{" "}
        <a href="tel:02-533-7753" className="underline">
          02-533-7753
        </a>{" "}
        / FAX:{" "}
        <a href="tel:02-533-7752" className="underline">
          02-533-7752
        </a>
        <br className="hidden max-sm:block" />
        <span className="inline max-sm:hidden"> / </span>
        Email:{" "}
        <a href="mailto:jseng@jseng.co.kr" className="underline">
          jseng@jseng.co.kr
        </a>
        <br />
        (주)정석기술연구소 / 대표자: 김종석
      </div>
    </footer>
  );

  return (
    <div className="flex min-h-screen flex-col">
      {renderHeader()}
      <main>
        {renderBanner()}
        <div className="relative">
          {render회사소개()}
          <MyDivider />
          {render회사주요업무()}
          <MyDivider />
          {render대표가직접뛰는회사()}
          <MyDivider />
          {render임직원현황()}
          <MyDivider />
          {render찾아오시는길()}
        </div>
      </main>
      {renderFooter()}
    </div>
  );
}
