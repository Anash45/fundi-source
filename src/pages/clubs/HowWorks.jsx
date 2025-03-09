import React from "react";
import Image from "../../assets/for-clubs/how-works-for-clubs.png";
import { GoArrowDown } from "react-icons/go";

const HowWorks = () => {
  return (
    <section className="pt-[60px] md:pt-[100px] mb-[30px] md:mb-[100px] relative">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex-col-reverse flex gap-x-16 gap-y-8 lg:flex-row relative">
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pr-4 pl-4 xl:pl-0">
            <div className="gap-y-6 flex flex-col w-full">
              <h1 className="md:max-w-[600px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                How it all works
              </h1>

              <p className="md:max-w-[450px] text-[#494951]">
                Fundi offers a modern solution that lets you raise funds
                consistently without the need for endless planning and volunteer
                hours.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-6/12 relative pl-5 2xl:pl-0 h-[80vw] lg:h-auto lg:min-h-[650px]">
            <img
              src={Image}
              alt="How it all works"
              loading="lazy"
              className="object-cover h-full min-h-full lg:absolute right-0 2xl:-right-[20%]"
            />
          </div>
        </div>
      </div>

      <a href="#accountsetpup" className="cursor-pointer w-12 h-12 text-2xl rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 animate-bouncingDown text-pink-600 border border-pink-600 hidden lg:flex items-center justify-center">
        <GoArrowDown />
      </a>
    </section>
  );
};

export default HowWorks;
