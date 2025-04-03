"use client";

import React from "react";
import MyEmployeeCard from "./MyEmployeeCard";

const EmployeeStatus: React.FC = () => {
  return (
    <section className="p-10 text-center md:p-16 lg:flex">
      <h2 className="mb-5 text-start text-3xl font-medium text-[#09090b] lg:min-w-80 lg:text-4xl">
        조직도
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
          <MyEmployeeCard
            name="김종석"
            position="대표이사"
            subPosition=""
            qualifications={[
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
            ]}
            image="/image_kimjongseok.jpg"
          />
          <MyEmployeeCard
            name="이건후"
            position="이사"
            subPosition="기술담당 이사 / 준공도서"
            qualifications={[
              "광운대학교 건설법무대학원 석사",
              "건축기사/특급기술자(시공, 품질, 건설사업관리)",
              "범양건영(주) 품질안전팀/ CS팀 근무",
              "(주)한양 기술개발팀(견적담당) 근무",
              "(주)동양건설산업 건축팀/ 견적팀/ CS팀 근무",
              "LH외 아파트, 주상복합, 오피스텔 현장 근무",
            ]}
            image="/icon_logo2.png"
          />
          <MyEmployeeCard
            name="강민주"
            position="부장"
            subPosition="기술송무 총괄 담당"
            qualifications={[
              "건축사/법원 감정인",
              "엔지니어링 회사 기술송무 (실적 200개 현장)",
              "해안종합건축사사무소 근무(주상복합 및 LH공동주택 설계)",
            ]}
            image="/icon_logo2.png"
          />
          <MyEmployeeCard
            name="김도영"
            position="부장"
            subPosition="송무담당 / 준공도서"
            qualifications={[
              "건축기사 / 특급기술자",
              "엔지니어링 회사 기술송무/준공도서 검토용역 공무",
              "아파트, 주상복합현장 공사/공무 수행",
              "(주)동양건설사업 CS팀 (30개 현장 1만 세대 담당)",
            ]}
            image="/icon_logo2.png"
          />
          <MyEmployeeCard
            name="김미지"
            position="대리"
            subPosition="송무담당 / 감정서 작성"
            qualifications={[
              "건축기사 / 토목기사 / 건설재료 시험기사",
              "엔지니어링 회사 기술송무 / 감정 업무",
              "BIM 적산, 물량 산출",
              "(주)동양건설산업 현장 시공",
            ]}
            image="/icon_logo2.png"
          />
        </div>
      </div>
    </section>
  );
};

export default EmployeeStatus;
