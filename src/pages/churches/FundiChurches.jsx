import React from "react";
import Image from "../../assets/for-churches/fundi-for-churches.png";
import Logo from "./../../assets/TESTIMONIALS/13.png";

const FundiChurches = () => {
  return (
    <section className="pt-[60px] md:pt-[100px] pb-[30px] md:pb-[100px]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex-col-reverse flex gap-x-16 gap-y-8 lg:flex-row-reverse relative">
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pl-4 xl:pl-0">
            <div className="gap-y-6 flex flex-col w-full">
              <h1 className="md:max-w-[600px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                Fundi for churches
              </h1>

              <p className="md:max-w-[500px] text-[#494951]">
                Transform your church’s fundraising efforts with Fundi’s
                all-in-one platform, crafted to simplify giving and engage your
                entire congregation. No more reliance on traditional collection
                plates or endless bake sales—Fundi enables churches to raise
                funds efficiently, ensuring every contribution supports your
                mission. From church members and congregants to local
                supporters, Fundi makes giving seamless, empowering you to focus
                on ministry and outreach while your community helps make a
                lasting impact.
              </p>

            </div>
          </div>

          <div className="w-full lg:w-6/12 relative pr-5 2xl:pr-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex justify-end items-center">
            <img
              src={Image}
              alt="Fundi for churches"
              loading="lazy"
              className="object-cover h-auto w-full lg:absolute left-0 2xl:-left-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundiChurches;
