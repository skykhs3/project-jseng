"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const CompanyIntroduction: React.FC = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: "150+", label: "프로젝트 완료", color: "bg-primary-100" },
    { number: "10+", label: "전문 기술자", color: "bg-secondary-100" },
    { number: "50+", label: "법원 감정평가", color: "bg-accent-100" },
    { number: "99%", label: "고객 만족도", color: "bg-primary-100" },
  ];

  return (
    <div className="container-custom" id="회사소개">
      <div
        className={`grid grid-cols-1 gap-12 md:grid-cols-2 ${contentInView ? "animate-fadeInUp" : "opacity-0"}`}
        ref={contentRef}
      >
        {/* Company Introduction Content */}
        <div className="order-2 md:order-1">
          <h2 className="heading-lg text-primary-800 mb-6">회사 소개</h2>

          <div className="text-secondary-700 space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="text-primary-700 font-semibold">
                정석기술연구소
              </span>
              는 건축, 토목, 엔지니어링, 건축물 하자진단, 안전진단, 법원
              감정평가 등 다양한 건설 관련 서비스를 제공합니다.
            </p>

            <p className="text-lg leading-relaxed">
              <span className="text-primary-700 font-semibold">
                정석기술연구소
              </span>
              는 설계, 시공, 견적, 안전, 품질, CS, 법무분야의 건설사에서 근무한
              기술자들로 이루어져 있습니다.
            </p>

            <p className="text-lg leading-relaxed">
              전문 역량을 쌓은 전문 기술자들로 구성된{" "}
              <span className="text-primary-700 font-semibold">
                국내 최고의 엔지니어링 회사
              </span>
              입니다.
            </p>

            <div className="mt-8 flex">
              <button className="btn-primary">더 알아보기</button>
            </div>
          </div>
        </div>

        {/* Company Image */}
        <div className="order-1 flex items-center justify-center md:order-2">
          <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-xl shadow-xl md:h-[400px]">
            <Image
              src="/KakaoTalk_Photo_2024-06-16-14-29-12.jpeg"
              alt="정석기술연구소 이미지"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className={`mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ${statsInView ? "animate-fadeInUp animate-delay-300ms" : "opacity-0"}`}
        ref={statsRef}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center rounded-lg ${stat.color} p-6 text-center shadow-md transition-transform hover:-translate-y-1`}
          >
            <span className="text-primary-700 text-4xl font-bold">
              {stat.number}
            </span>
            <span className="text-secondary-700 mt-2 text-lg font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyIntroduction;
