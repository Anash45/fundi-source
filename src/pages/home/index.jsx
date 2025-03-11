import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Brands from "./Brands";
import WhatFundi from "./WhatFundi";
import BannerOne from "./BannerOne";
import Technology from "./Technology";
import CertifiedCompanies from "./CertifiedCompanies";
import Testimonials from "./Testimonials";
import MakeItRemarkable from "./MakeItRemarkable";
import Hero from "./Hero";
import FAQ from "./FAQ";
import SimplifiesOperations from "./SimplifiesOperations";
import Hospitality from "./Hospitality";
import ScrollToFAQ from "../../components/ScrollToFaq";

const Home = () => {
  const colors = useMemo(() => ["#EFEFFF", "#E6F5F0"], []);

  const [bgColor, setBgColor] = useState(colors[0]); 

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor); 
    }, Math.floor(Math.random() * 500) + 2000); 

    return () => clearInterval(interval);
  }, [colors]);

  return (
    <div>
      <ScrollToFAQ />
      <Header />
      <div
        className="transition-background duration-[.6s] pb-[60px] md:pb-[80px] lg:pt-28 sm:pt-28 pt-[80px]"
        style={{ backgroundColor: bgColor }}
      >
        <Hero />

        <Brands />
        <WhatFundi />
      </div>
      <Hospitality />

      <BannerOne />
      <Technology />
      <SimplifiesOperations />
      <CertifiedCompanies />
      <Testimonials />
      <MakeItRemarkable />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
