import React from "react";
import Image from "../../assets/for-clubs/fundi-for-clubs.png";
import HRLogo from "./../../assets/TESTIMONIALS/14.jpeg";

const FundiClubs = () => {
  return (
    <section className="pt-[60px] md:pt-[100px] pb-[30px] md:pb-[100px]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex-col-reverse flex gap-x-16 gap-y-8 lg:flex-row relative">
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pr-4 pl-4 xl:pl-0">
            <div className="gap-y-6 flex flex-col w-full">
              <h1 className="md:max-w-[600px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                Fundi for clubs
              </h1>

              <p className="md:max-w-[450px] text-[#494951]">
                Revolutionise your club’s fundraising efforts with Fundi’s
                powerful platform, designed to make donations simple and
                engaging for your entire community. Say goodbye to endless
                sausage sizzles and gold coin donation drives—Fundi allows clubs
                to raise funds efficiently and effectively, ensuring every
                contribution goes towards making an impact. From members and
                supporters to sponsors, Fundi streamlines the process so you can
                focus on what matters most.
              </p>

              <div className="border-t pt-4 md:max-w-[450px]">
                <img src={HRLogo} alt="HRLogo" className="w-14 h-14 rounded-full" />

                <div className="pt-4 text-sm">
                  <p className="text-[#494951]">
                    "The platform's ability to connect supporters and streamline
                    donations has made our events more successful than ever."
                  </p>
                  <p className="text-[#494951] mt-4">
                    Jessica Lee
                    <br />
                    Events Coordinator
                    <br />
                    <b>Harmony Sports Club, Adelaide</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12 relative pl-5 2xl:pl-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex justify-end items-center">
            <img
              src={Image}
              alt=" Why Fundi for schools"
              loading="lazy"
              className="object-cover h-auto w-full lg:absolute right-0 2xl:-right-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundiClubs;
