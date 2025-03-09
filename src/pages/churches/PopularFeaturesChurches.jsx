import React from "react";
import Image from "../../assets/for-churches/popular-features-for-churches.png";
import { FaSchool, FaUsers } from 'react-icons/fa';
import { MdTimeline } from "react-icons/md";
import { FaQrcode } from 'react-icons/fa';

const PopularFeaturesChurches = () => {
  return (
    <section className="pt-[60px] md:pt-[100px] pb-[30px] md:pb-[100px]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex gap-x-16 gap-y-8 flex-col-reverse lg:flex-row relative">
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pr-4 lg:pl-0 pl-4">
            <div className="flex flex-col w-full gap-y-6">
              <h1 className="md:max-w-[400px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                Popular features for churches
              </h1>

              <p className="md:max-w-[450px] text-[#494951] mb-5">
                Empower your church’s mission with Fundi’s tailored features
                that make giving easy and engaging for your entire congregation.
                From church members and visitors to local partners, Fundi
                simplifies fundraising, so every donation helps your church grow
                and serve your community.
              </p>

              {/* POints  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                <div className="flex gap-3">
                  <FaSchool className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">
                      Round-up donations for church initiatives
                    </h2>
                    <p className="text-[#494951] text-sm">
                      Allow members and supporters to contribute by rounding up
                      everyday purchases, funding special church projects and
                      outreach programs effortlessly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaUsers className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">
                      Faith-based community giving
                    </h2>
                    <p className="text-[#494951] text-sm">
                      Engage your congregation with meaningful giving
                      opportunities, such as targeted donations for outreach
                      missions, facility enhancements, or youth programs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaQrcode className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">
                      Custom QR codes for services and events
                    </h2>
                    <p className="text-[#494951] text-sm">
                      Share unique QR codes for immediate giving during
                      services, events, or community gatherings, making it easy
                      for attendees to support your ministry in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MdTimeline className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">
                      Progress tracking for church projects
                    </h2>
                    <p className="text-[#494951] text-sm">
                      Showcase the impact of contributions by displaying live
                      updates on initiatives like building improvements, mission
                      trips, or community aid projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image  */}
          <div className="w-full lg:w-6/12 relative pl-5 2xl:pl-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex items-center">
            <img
              src={Image}
              alt="Popular features for churches"
              loading="lazy"
              className="object-cover w-full h-auto lg:absolute right-0 2xl:-right-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularFeaturesChurches;
