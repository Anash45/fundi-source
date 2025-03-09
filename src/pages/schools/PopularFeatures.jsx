import React from "react";
import Image from "../../assets/for-schools/popular-features-for-schools.png";
import { FaSchool, FaUsers } from 'react-icons/fa';
import { MdTimeline } from "react-icons/md";
import { FaQrcode } from 'react-icons/fa';

const PopularFeatures = () => {
  return (
    <section id="popularfeaturesforschools" className="pt-[60px] md:pt-[100px] pb-[30px] md:pb-[100px] bg-[#f8f5f2]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex gap-x-16 gap-y-8 flex-col-reverse lg:flex-row-reverse relative">
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pr-4 lg:pl-0 pl-4">
            <div className="flex flex-col w-full gap-y-6">
              <h1 className="md:max-w-[400px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                Popular features for schools
              </h1>

              <p className="md:max-w-[450px] text-[#494951] mb-5">
                Transform your school’s fundraising efforts with Fundi’s
                innovative platform designed to simplify donations and engage
                the entire school community. From parents and teachers to
                alumni, Fundi allows schools to raise money efficiently and
                effectively, ensuring every dollar makes a difference.
              </p>

              {/* POints  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                <div className="flex gap-3">
                  <FaSchool className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">Round-up for school fees</h2>
                    <p className="text-[#494951] text-sm">
                      Let parents round up everyday purchases to contribute to
                      school fees or donations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaUsers className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">
                      Community driven fundraising
                    </h2>
                    <p className="text-[#494951] text-sm">
                      Engage students through gamified challenges and rankings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaQrcode className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">Custom QR codes</h2>
                    <p className="text-[#494951] text-sm">
                      Easy sharing of donation links at events and through
                      school communications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MdTimeline className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">Project progress tracking</h2>
                    <p className="text-[#494951] text-sm">
                      Showcase live progress on projects like new playgrounds,
                      facilities, or technology upgrades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image  */}
          <div className="w-full lg:w-6/12 relative pr-5 2xl:pr-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex items-center">
            <img
              src={Image}
              alt=" Why Fundi for schools"
              loading="lazy"
              className="object-cover w-full h-auto lg:absolute left-0 2xl:-left-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularFeatures;
