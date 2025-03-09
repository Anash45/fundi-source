import React from "react";
import Image from "../../assets/for-clubs/popular-features-for-clubs.png";
import { FaSchool, FaUsers } from 'react-icons/fa';
import { MdTimeline } from "react-icons/md";
import { FaQrcode } from 'react-icons/fa';

const PopularFeaturesClubs = () => {
  return (
    <section className="pt-[60px] md:pt-[100px] pb-[30px] md:pb-[100px]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex gap-x-16 gap-y-8 flex-col-reverse lg:flex-row-reverse relative">
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pr-4 lg:pl-0 pl-4">
            <div className="flex flex-col w-full gap-y-6">
              <h1 className="md:max-w-[400px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                Popular features for clubs
              </h1>

              <p className="md:max-w-[450px] text-[#494951] mb-5">
                Supercharge your club’s fundraising potential with Fundi’s
                innovative tools that simplify giving and unify your community.
                From members and fans to local businesses, Fundi makes
                fundraising efficient and engaging, ensuring every contribution
                moves your club closer to its goals
              </p>

              {/* POints  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                <div className="flex gap-3">
                  <FaSchool className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">
                      Round-up donations for club fees
                    </h2>
                    <p className="text-[#494951] text-sm">
                      Make it easy for members and supporters to contribute by
                      rounding up their everyday purchases, helping fund special
                      projects.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaUsers className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">Sponsor integration</h2>
                    <p className="text-[#494951] text-sm">
                      Attract and showcase local sponsors with dedicated content
                      and image sections of the dashboard, enhancing community
                      partnerships.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaQrcode className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">Event-based QR codes</h2>
                    <p className="text-[#494951] text-sm">
                      Share QR codes for quick donations at matches, events,
                      and social gatherings, capturing contributions in real
                      time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MdTimeline className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">
                      Goal progress & project highlights
                    </h2>
                    <p className="text-[#494951] text-sm">
                      Keep your community engaged by tracking live progress on
                      projects, such as facility improvements, new team gear, or
                      community outreach, allowing supporters to see the impact
                      of their donations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image  */}
          <div className="w-full lg:w-6/12 relative pr-5 2xl:pr-0 h-[80vw] lg:h-auto lg:min-h-[650px]">
            <img
              src={Image}
              alt="Popular features for clubs"
              loading="lazy"
              className="object-cover h-full min-h-full lg:absolute left-0 2xl:-left-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularFeaturesClubs;
