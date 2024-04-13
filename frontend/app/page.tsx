// src/components/Home.js
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* 헤더 섹션 */}
      <header className="flex justify-center items-center bg-black text-gold-500 h-12">
        <h1 className="text-xl font-bold">(주) 정석 기술 연구소</h1>
      </header>

      {/* 이미지 섹션 */}
      <section className="flex items-center justify-center">
        <img src="/image_banner.jpg" alt="배너" className="max-w-full h-auto shadow-lg" />
      </section>

      {/* 회사 소개 섹션 */}
      <section className="bg-gray-900 p-10 text-center">
        <h2 className="text-2xl font-semibold text-gold-500 mb-5">회사 소개</h2>
        <p className="text-gray-300">
          정석 기술 연구소는 건축, 토목, 엔지니어링, 건축물 하자진단, 안전진단, 계측, 구조설계 및 법원 감정평가 등 다양한 건설 관련 서비스를 제공합니다. 고객의 요구에 맞춘 최고의 솔루션을 제공하여 안전하고 효율적인 건축 환경을 구축하는 데 앞장서고 있습니다.
        </p>
      </section>

      {/* 배너 섹션 */}
      <section className="flex-grow">
        <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500">
          <p className="text-xl font-bold text-white text-center">
            건축 및 토목 엔지니어링 전문 서비스 <br />
            사진
          </p>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-black text-gold-500 text-center p-4">
        서울특별시 서초구 서초중앙로24길 11 (우)06604<br />
        TEL *****8 / FAX *****8 / E-mail 5233200@hwainlaw.com <br />
        업체명: 정석기술연구소 사업자등록번호: 214-86-18229 <br />
        대표자: 김종석
      </footer>
    </div>
  );
}
