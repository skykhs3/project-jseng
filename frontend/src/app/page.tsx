"use client";

import React, { useCallback, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CompanyIntroduction from "../components/CompanyIntroduction";
import MainBusiness from "../components/MainBusiness";
import CEOCompany from "../components/CEOCompany";
import EmployeeStatus from "../components/EmployeeStatus";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

export default function Home() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isSecondPageVisible, setIsSecondPageVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setIsBannerVisible(scrollPosition < windowHeight * 0.5);
    setIsSecondPageVisible(scrollPosition > windowHeight * 0.5);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="min-h-screen bg-white">
        <Banner
          isBannerVisible={isBannerVisible}
          isSecondPageVisible={isSecondPageVisible}
        />
        <CompanyIntroduction />
        <Divider />
        <MainBusiness />
        <Divider />
        <CEOCompany />
        <Divider />
        <EmployeeStatus />
        <Divider />
        <Location />
        <Footer />
      </main>
    </div>
  );
}
