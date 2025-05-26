import React from "react";
import makeItRemarkable from "../../assets/remarkable.png";
import { Link } from "react-router-dom";

const MakeItRemarkable = ({ isHome = false }) => {
  return (
    <div className="bg-[#F8F5F2]">
      <div className="bg-[#E6F5F0]  lg:py-[6rem] py-[3rem] px-6 lg:px-8">
        {isHome ? (
          <div className="container mx-auto">
            <div className="max-w-[1062px] mx-auto flex flex-col md:flex-row items-center gap-[2rem] md:gap-[4rem] lg:gap-[7rem]">
              <div className="w-full md:w-[50%] lg:w-1/2 flex">
                <div className="relative w-full overflow-hidden md:max-w-[500px]">
                  <img
                    src={makeItRemarkable}
                    alt="Vintage hotel interior with chairs and tables"
                    className="image rounded-3xl lg:rounded-[40px] aspect-[464/416] object-cover lg:w-full h-full flex"
                  />
                </div>
              </div>

              <div className="w-full md:w-[50%] lg:w-5/12 flex flex-col gap-[1.5rem]">
                <h1 className="text-[32px] sm:text-[48px] font-[400] font-axiformaa tracking-tight text-[#1c1d24] leading-[125%]">
                  Make it <br className="md:flex hidden" /> remarkable.
                </h1>

                <p className="text-[#494951] max-w-lg">
                  Ready to take the first step towards a more efficient,
                  flexible, and profitable approach to fundraising?
                </p>
                <a
                  href="https://calendly.com/fundi-au/fundi-demo-call"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center gap-2 w-fit">
                    Book a demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative max-w-[1280px] mx-auto">
            <div className="flex gap-x-16 gap-y-[30px] xs:gap-y-[60px] justify-between flex-col lg:flex-row-reverse items-center relative">
              <div className="w-full lg:w-6/12 justify-start items-start flex relative md:max-w-[500px]">
                <img
                  src={makeItRemarkable}
                  alt="Security & compliance"
                  className="rounded-[32px] min-h-auto object-cover h-auto w-full"
                  loading="lazy"
                />
              </div>

              <div className="w-full lg:w-6/12 items-center flex relative">
                <div className="gap-y-6 flex flex-col w-full lg:w-auto">
                  <h1 className="text-[32px] sm:text-[48px] font-[400] font-axiformaa tracking-tight text-[#1c1d24] leading-[125%]">
                    Make it <br className="md:flex hidden" /> remarkable.
                  </h1>

                  <p className="text-[#494951] max-w-lg">
                    Ready to take the first step towards a more efficient,
                    flexible, and profitable approach to fundraising?
                  </p>
                  <a
                    href="https://calendly.com/fundi-au/fundi-demo-call"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center gap-2 w-fit">
                      Book a demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MakeItRemarkable;
