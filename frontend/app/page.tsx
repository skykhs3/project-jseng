import Slider from "@ant-design/react-slick";
export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 헤더 섹션 */}

      <header className="flex h-[46px] items-center justify-center bg-white ">
        <h1 className="text-xl font-bold text-black ">(주)정석기술연구소</h1>
      </header>
      {/* 이미지 섹션 */}
      <section className="relative flex h-auto w-full items-center justify-center sm:h-[220px] md:h-[320px] lg:h-[495px] ">
        <img
          src="/image_banner.jpg"
          alt="배너"
          className="absolute z-0 h-full w-full object-cover"
        />
        <div className="absolute z-10 h-full w-full bg-black opacity-50" />
        <p className="text-baseline z-20 p-10 text-sm font-light text-white md:text-lg lg:text-2xl">
          <strong>정석기술연구소</strong> - 국내 최고의 건설 전문가 팀.
          <br />
          <br />
          설계부터 시공, 법률 자문까지, 모든 건설 프로젝트에 최적화된 솔루션을
          제공합니다.
          <br />
          <br />
          <em>
            안전과 품질을 최우선으로, 국내 최고 건설 전문 로펌과 협력하여 송무
            지원 및 기술 자문을 제공합니다.
          </em>
        </p>
      </section>
      {/* 회사 소개 섹션 */}
      <section className="bg-white p-10 text-center">
        <h2 className="text-black-900 mb-5 text-3xl">회사 소개</h2>
        <p className="text-black">
          정석 기술 연구소는 건축, 토목, 엔지니어링, 건축물 하자진단, 안전진단,
          계측, 구조설계 및 법원 감정평가 등 다양한 건설 관련 서비스를
          제공합니다. 고객의 요구에 맞춘 최고의 솔루션을 제공하여 안전하고
          효율적인 건축 환경을 구축하는 데 앞장서고 있습니다.
        </p>
      </section>

      {/* 배너 섹션 */}
      <section className="flex-grow">
        <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500">
          <p className="text-center text-xl font-bold text-white">
            건축 및 토목 엔지니어링 전문 서비스 <br />
            사진
          </p>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-black p-4 text-center text-gold-500">
        서울특별시 서초구 서초중앙로24길 11 (우)06604
        <br />
        TEL *****8 / FAX *****8 / E-mail 5233200@hwainlaw.com <br />
        업체명: 정석기술연구소 사업자등록번호: 214-86-18229 <br />
        대표자: 김종석
      </footer>
    </div>
  );
}
