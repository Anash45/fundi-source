import React from "react";
import { Link } from "react-router-dom";
import { IoArrowDown } from "react-icons/io5";


const Hero = () => {
  return (
    <section className="clubshero overflow-hidden mt-[72px] rounded-b-[40px] lg:rounded-b-[80px] relative bg-no-repeat bg-center bg-cover px-4">
      <div className="max-w-[1280px] z-40 relative w-full mx-auto lg:pt-16 lg:pb-24 pb-16 pt-20 md:min-h-auto xxl:min-h-[65vh] xl:max-h-[650px] md:max-h-[650px] md:h-screen md:min-h-[350px] min-h-[450px] flex items-center">
        <div className="max-w-[700px] relative">
          <h2 className="text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.25] text-white font-axiforma-r mb-4 relative">
            Efficient fundraising starts with community connection
          </h2>

          <p className="text-white mb-6 hidden md:block">
            Fundraising for clubs doesn’t have to be complicated. Fundi makes it
            simple to engage your community, rally supporters, and reach your
            goals faster with innovative tools tailored to clubs. Transform how
            you fundraise and watch your club thrive with a platform built to
            maximise every contribution.
          </p>

          <Link
            to="https://calendly.com/fundi-au/fundi-demo-call"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center w-full md:w-fit justify-center">
              Book a demo
            </button>
          </Link>
        </div>

        <a href="#brands" className="cursor-pointer w-12 h-12 text-2xl rounded-full absolute bottom-5 md:bottom-20 xxl:bottom-16 xxl:bottom-16 left-1/2 -translate-x-1/2 animate-bouncingDown text-white border border-white flex items-center justify-center">
          <IoArrowDown />
        </a>
      </div>

      <div className="absolute inset-0 bg-black/35"></div>
    </section>
  );
};

export default Hero;
