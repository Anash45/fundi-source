import React from "react";
import Header from "../../components/Header";
import Hero from "./Hero";
import Footer from "../../components/Footer";
import TrustedSupports from "./TrustedSupports";
import FundiClubs from "./FundiClubs";
import PopularFeaturesClubs from "./PopularFeaturesClubs";
import HowWorks from "./HowWorks";
import AllFeatures from "./AllFeatures";
import SecurityCompliance from "../schools/SecurityCompliance";
import AccountSetup from "../schools/AccountSetup";
import Testimonials from "../home/Testimonials";
import MakeItRemarkable from "../home/MakeItRemarkable";
import VideoTwo from "../../assets/videos/VIDEO 2 Fundi - Club supporter sign up demo.mp4";
import Video from "../../components/Video";

const ForClubs = () => {

  return (
    <div>
      <Header />

      <div className="bg-[#f2f5f8]">
        <Hero />
        <TrustedSupports id="brands" />
        <FundiClubs />
      </div>

      <PopularFeaturesClubs />
      <Video videoSrc={VideoTwo} />
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

export default ForClubs;
