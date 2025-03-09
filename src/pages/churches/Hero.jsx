import React from "react";
import Image from "../../assets/churches-hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pb-12 lg:pb-0 bg-bg-indego mt-[72px]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex-col-reverse flex gap-x-16 gap-y-8 lg:flex-row relative">
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative px-4 xl:px-0">
            <div className="gap-y-6 flex flex-col w-full">
              <h1 className="md:max-w-[450px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                Empowering your mission with seamless fundraising
              </h1>

              <p className="md:max-w-[450px] text-[#494951]">
                Fundi offers a modern, secure platform for churches to elevate
                their fundraising efforts, connecting congregations and
                communities like never before. Fundi enables your church to
                focus on ministry while providing a simple, effective way for
                members to support your mission.
              </p>

              <Link
                to="https://calendly.com/fundi-au/fundi-demo-call"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center w-fit justify-center">
                  Book a demo
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-6/12 relative pl-5 2xl:pl-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex justify-end">
            <img
              src={Image}
              alt="Empowering your mission with seamless fundraising"
              loading="lazy"
              className="object-cover w-full h-full min-h-full rounded-l-[9999px] lg:absolute right-0 2xl:-right-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
