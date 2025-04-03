"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
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
};

export default Footer;
