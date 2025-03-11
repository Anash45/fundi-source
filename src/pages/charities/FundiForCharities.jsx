import React from "react";
import Image from "../../assets/for-schools/why-fundi-for-schools.png";
import Image2 from "./../../assets/for-charities/IMAGE-2.png";

const FundiForCharities = () => {
  return (
    <section className="pt-[60px] md:pt-[100px] pb-[30px] md:pb-[100px]" id="why">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex-col-reverse flex gap-x-16 gap-y-8 lg:flex-row relative">

          <div className="w-full lg:w-6/12 relative pl-5 2xl:pl-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex items-center">
            <img
              src={Image2}
              alt=" Why Fundi for schools"
              loading="lazy"
              className="object-cover h-auto w-full min-h-auto lg:absolute left-0 2xl:-left-[20%]"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pr-4 pl-4 xl:pl-0">
            <div className="gap-y-6 flex flex-col w-full">
              <h1 className="md:max-w-[600px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
              Why Fundi for charities
              </h1>

              <p className="md:max-w-[450px] text-[#494951]">
              Fundi provides an all-in-one solution to help charities increase donor engagement and secure ongoing funding with ease. Whether you’re a grassroots organisation or a large national charity, Fundi enables you to accept donations effortlessly and grow your impact. Say goodbye to manual processing, complex fundraising events, and limited outreach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundiForCharities;
