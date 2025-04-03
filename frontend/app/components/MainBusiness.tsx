"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

const MainBusiness: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

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

  return (
    <section
      className={`p-10 text-center opacity-0 md:p-16 lg:flex ${inView ? "animate-fadeInUp animate-delay-1s" : ""}`}
      ref={ref}
    >
      <h2 className="mb-5 text-start text-3xl font-medium text-[#09090b] lg:min-w-80 lg:text-4xl">
        주요 업무
      </h2>
      <ul className="list-outside">
        {업무내용.map((item, index) => (
          <li key={index}>
            {index > 0 && <div className="h-7 lg:h-8"></div>}
            <div className="m-auto list-hyphen break-keep text-start text-base text-[#52525b] lg:text-xl">
              <span className="text-xl font-medium text-black lg:text-2xl">
                {item.title}
              </span>
              <br />
              {item.description}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainBusiness;
