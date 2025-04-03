"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

const CompanyIntroduction: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section className="p-10 text-center md:p-16" id="회사소개">
      <div
        className={`pt-[60px] opacity-0 lg:flex lg:pt-[80px] ${inView ? "animate-fadeInUp animate-delay-300ms" : ""}`}
        ref={ref}
      >
        <h2 className="mb-5 text-start text-3xl font-medium text-[#09090b] lg:min-w-80 lg:text-4xl">
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
};

export default CompanyIntroduction;
