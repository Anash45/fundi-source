import React from "react";
import Image from "../../assets/for-charities/IMAGE-3.png";
import { FaDonate, FaUsers } from 'react-icons/fa';
import { MdTimeline } from "react-icons/md";
import { FaQrcode } from 'react-icons/fa';
import { FaHandHolding } from "react-icons/fa6";

const PopularFeatures = () => {
  return (
    <section id="popularfeaturesforschools" className="pt-[60px] md:pt-[100px] pb-[30px] md:pb-[100px] bg-[#f8f5f2]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex gap-x-16 gap-y-8 flex-col-reverse lg:flex-row-reverse relative">
          {/* Image  */}
          <div className="w-full lg:w-6/12 relative pr-5 2xl:pr-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex items-center">
            <img
              src={Image}
              alt=" Why Fundi for schools"
              loading="lazy"
              className="object-cover w-full h-auto lg:absolute right-0 2xl:-right-[20%]"
            />
          </div>
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pr-4 lg:pl-0 pl-4">
            <div className="flex flex-col w-full gap-y-6">
              <h1 className="md:max-w-[400px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
              Popular features for charities
              </h1>

              <p className="md:max-w-[450px] text-[#494951] mb-5">
              Fundi offers a powerful suite of tools designed to help charities streamline donations, engage supporters, and maximise fundraising potential.
              </p>

              {/* POints  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                <div className="flex gap-3">
                  <FaHandHolding className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">Round-up donations for ongoing support</h2>
                    <p className="text-[#494951] text-sm">
                    Let donors round up their everyday purchases to contribute effortlessly to your cause.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaDonate className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">
                    Custom-branded donation pages
                    </h2>
                    <p className="text-[#494951] text-sm">
                    Provide supporters with a direct, distraction-free way to donate, keeping your charity front and centre.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaQrcode className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">Quick-donate QR codes</h2>
                    <p className="text-[#494951] text-sm">
                    Share unique QR codes at events, in emails, and across social media to capture instant contributions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MdTimeline className="text-lg md:text-2xl mt-2" />

                  <div className="flex-1">
                    <h2 className="font-medium">Live donation tracking & impact updates</h2>
                    <p className="text-[#494951] text-sm">
                    Keep donors engaged with real-time progress tracking, showing exactly how their contributions make a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PopularFeatures;
