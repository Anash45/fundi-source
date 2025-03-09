import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Testimonials from "../home/Testimonials";
import MakeItRemarkable from "../home/MakeItRemarkable";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Pricing = () => {

  const [activeTab, setActiveTab] = useState("starter");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  
    // Scroll to the corresponding section with offset for sticky header
    const element = document.getElementById(tabId);
    if (element) {
      const headerOffset = 140; // Adjust this value based on your sticky bar's height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <Header />

      <section className="xs:px-4 pt-28 md:pt-[150px] pb-20 relative">
        <div className="max-w-[1280px] w-full mx-auto">
          <div className="mb-14 px-4">
            <h1 className="text-[40px] text-[#1c1d24] leading-[1.25] mb-4 font-axiforma-r text-center">
              Fundi partner plans
            </h1>
            <p className="text-base text-[#494951] text-center">
              Remarkable fundraising suited to your needs.
            </p>
          </div>

          {/* Mobile Tabs */}
          <div className="px-4 bg-white sticky top-[74px] pt-1 z-20 pb-6 mb-1 border-b border-opacity-80 flex md:hidden">
            <div className="md:hidden w-full grid grid-cols-3 rounded-[40px] bg-[#E8E8E9] p-[2px]">
              <button
                onClick={() => handleTabClick("starter")}
                className={`rounded-[40px] py-4 text-center ${activeTab === "starter" ? "bg-white" : "bg-transparent"
                  } relative text-base`}
              >
                Starter
              </button>
              <button
                onClick={() => handleTabClick("growth")}
                className={`rounded-[40px] py-4 text-center ${activeTab === "growth" ? "bg-white" : "bg-transparent"
                  } relative text-base`}
              >
                Growth
              </button>
              <button
                onClick={() => handleTabClick("impact")}
                className={`rounded-[40px] py-4 text-center ${activeTab === "impact" ? "bg-white" : "bg-transparent"
                  } relative text-base`}
              >
                Impact
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div id="starter" className="relative flex-1 py-10 px-5 xs:px-[30px] xs:border-4 border-blue-border xs:rounded-[16px]">
              <div>
                <h1 className="font-axiforma-r text-[32px] md:text-[22px] leading-snug md:leading-normal mb-5">
                  Starter
                </h1>

                <p className="text-[#494952] leading-normal mb-5">
                  All the benefits of Fundi right out of the box to get you up
                  and running quickly.
                </p>
              </div>

              <Link
                to="https://calendly.com/fundi-au/fundi-demo-call"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-[#ff5a65] border border-[#ff5a65] mb-10 text-[15px] font-medium py-[7px] px-[1.5rem] rounded-full transition-colors flex items-center w-fit justify-center">
                  Book a demo
                </button>
              </Link>

              <div>
                <p className="mb-5 text-sm text-night-black font-bold">
                  Get started with Starter:
                </p>

                <ul className="flex flex-col gap-y-4 mb-2.5">
                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Fundraising options (one-time, weekly, round-up)
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Supporter QR code/link, website, hosting & welcome pack
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Supporter dashboard (branded)
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Organisation analytics dashboard
                  </li>

                </ul>
              </div>
            </div>

            <div id="growth" className="relative flex-1 py-10 px-5 xs:px-[30px] xs:border-4 border-[#f0f5ff] xs:rounded-[16px] bg-[#f0f5ff]">
              <div>
                <h1 className="font-axiforma-r text-[32px] md:text-[22px] leading-snug md:leading-normal mb-5">
                  Growth
                </h1>

                <p className="text-[#494952] leading-normal mb-5">
                  Achieve more with access to analytics & supporter data that
                  supports your community.
                </p>
              </div>

              <Link
                to="https://calendly.com/fundi-au/fundi-demo-call"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#ff5a65] text-white mb-10 text-[15px] font-medium py-[7px] px-[1.5rem] rounded-full transition-colors flex items-center w-fit justify-center">
                  Book a demo
                </button>
              </Link>

              <div>
                <p className="mb-5 text-sm text-night-black font-bold">
                  Do even more with Growth:
                </p>

                <ul className="flex flex-col gap-y-4 mb-2.5">
                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Fundraising options (one-time, weekly, round-up)
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Supporter QR code/link, website, hosting & welcome pack
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Supporter dashboard (branded)
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Organisation analytics dashboard
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Access to supporter data
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Data export capability
                  </li>
                </ul>
              </div>
            </div>

            <div id="impact" className="relative flex-1 py-10 px-5 xs:px-[30px] xs:border-4 border-blue-border xs:rounded-[16px]">
              <div>
                <h1 className="font-axiforma-r text-[32px] md:text-[22px] leading-snug md:leading-normal mb-5">
                  Impact
                </h1>

                <p className="text-[#494952] leading-normal mb-5">
                  Enjoy the freedom to fully utilise all platform features to
                  fundraise and volunteer effectively.
                </p>
              </div>

              <Link
                to="https://calendly.com/fundi-au/fundi-demo-call"
                target="_blank"
                rel="noreferrer"
              >
                <button className="border-[#ff5a65] border text-[#ff5a65] mb-10 text-[15px] font-medium py-[7px] px-[1.5rem] rounded-full transition-colors flex items-center w-fit justify-center">
                  Book a demo
                </button>
              </Link>

              <div>
                <p className="mb-5 text-sm text-night-black font-bold">
                  Maximise fundraising with Impact:
                </p>

                <ul className="flex flex-col gap-y-4 mb-2.5">
                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Fundraising options (one-time, weekly, round-up)
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Supporter QR code/link, website, hosting & welcome pack
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Supporter dashboard (branded)
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Organisation analytics dashboard
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Access to supporter data
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Data export capability
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Volunteer vetting (Vetti™)
                  </li>

                  <li className="flex gap-[6px] text-[#494951] text-sm">
                    <IoCheckmarkCircleOutline className="text-xl" />
                    Live silent auction integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <MakeItRemarkable />

      <Footer />
    </div>
  );
};

export default Pricing;
