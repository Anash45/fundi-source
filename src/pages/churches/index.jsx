import React from "react";
import Header from "../../components/Header";
import Hero from "./Hero";
import TrustedSupports from "./TrustedSupports";
import FundiChurches from "./FundiChurches";
import PopularFeaturesChurches from "./PopularFeaturesChurches";
import HowWorks from "./HowWorks";
import AllFeatures from "./AllFeatures";
import SecurityCompliance from "../schools/SecurityCompliance";
import AccountSetup from "../schools/AccountSetup";
import Testimonials from "../home/Testimonials";
import MakeItRemarkable from "../home/MakeItRemarkable";
import Footer from "../../components/Footer";
import VideoThree from "../../assets/videos/VIDEO 3 Fundi - Church supporter sign up demo.mp4";
import Video from "../../components/Video";

const ForChurches = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TrustedSupports />
      <FundiChurches />
      <PopularFeaturesChurches />
      <Video videoSrc={VideoThree} />
      <HowWorks />
      <AccountSetup />
      <AllFeatures />
      <SecurityCompliance />
      <Testimonials />
      <MakeItRemarkable />
      <Footer />
    </div>
  );
};

export default ForChurches;
