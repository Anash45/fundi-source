import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import TabsNavigation from "./TabsNavigation";
import FundiForCharities from "./FundiForCharities";
import PopularFeatures from "./PopularFeatures";
import HowWorks from "./HowWorks";
import AllFeatures from "./AllFeatures";
import SecurityCompliance from "./SecurityCompliance";
import AccountSetup from "./AccountSetup";
import Testimonials from "../home/Testimonials";
import MakeItRemarkable from "../home/MakeItRemarkable";
import Video from "../../components/Video";
import VideoOne from "../../assets/videos/VIDEO 1 Fundi - School supporter sign up demo.mp4";


const ForCharities = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FundiForCharities />
      <PopularFeatures />
      <Video videoSrc={VideoOne} />
      <HowWorks />
      <AccountSetup />
      <AllFeatures />
      <SecurityCompliance />
      {/* <Testimonials /> */}
      <MakeItRemarkable />
      <Footer />
    </div>
  );
};

export default ForCharities;
