import React from "react";
import Image from "../../assets/for-schools/why-fundi-for-schools.png";
import Mechefert from "./../../assets/TESTIMONIALS/15.jpeg";

const FundiForSchools = () => {
  return (
    <section className="pt-[60px] md:pt-[100px] pb-[30px] md:pb-[100px]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex-col-reverse flex gap-x-16 gap-y-8 lg:flex-row relative">
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pr-4 pl-4 xl:pl-0">
            <div className="gap-y-6 flex flex-col w-full">
              <h1 className="md:max-w-[600px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                Why Fundi for schools
              </h1>

              <p className="md:max-w-[450px] text-[#494951]">
                Transform your school’s fundraising efforts with Fundi’s
                innovative platform designed to simplify donations and engage
                the entire school community. From parents and teachers to
                alumni, Fundi allows schools to raise money efficiently and
                effectively, ensuring every dollar makes a difference.
              </p>

              
            </div>
          </div>

          <div className="w-full lg:w-6/12 relative pl-5 2xl:pl-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex items-center">
            <img
              src={Image}
              alt=" Why Fundi for schools"
              loading="lazy"
              className="object-cover h-auto w-full min-h-auto lg:absolute right-0 2xl:-right-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundiForSchools;
