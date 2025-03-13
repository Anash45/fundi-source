import React from "react";
import Image from "../../assets/for-charities/IMAGE-4.png";
import OAKWOODLogo from "./../../assets/6.png";
import { GoArrowDown } from "react-icons/go";


const HowWorks = () => {
  return (
    <section id="howitworks" className="pt-[60px] md:pt-[100px] pb-[30px] md:pb-[100px]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex-col-reverse flex gap-x-16 gap-y-8 lg:flex-row relative">
          <div className="w-full lg:w-6/12 relative pl-5 2xl:pl-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex items-center">
            <img
              src={Image}
              alt="How it all works"
              loading="lazy"
              className="object-cover w-full h-auto lg:absolute left-0 2xl:-left-[20%]"
            />
          </div>
          
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pr-4 pl-4 xl:pl-0">
            <div className="gap-y-6 flex flex-col w-full">
              <h1 className="md:max-w-[600px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
              How it all works
              </h1>

              <p className="md:max-w-[450px] text-[#494951]">
              Traditional fundraising can be time-consuming and unpredictable. Fundi offers a modern, scalable solution that allows charities to secure ongoing funding without relying solely on events, telemarketing, or major donors. With automated features and seamless donation options, Fundi makes fundraising simple, sustainable, and effective.
              </p>
            </div>
          </div>

        </div>

        <a href="#accountsetpup" className="cursor-pointer w-12 h-12 text-2xl rounded-full absolute bottom-0 xxl:bottom-16 left-1/2 -translate-x-1/2 animate-bouncingDown text-pink-600 border border-pink-600 hidden lg:flex items-center justify-center">
          <GoArrowDown />
        </a>
      </div>
    </section>
  );
};

export default HowWorks;
