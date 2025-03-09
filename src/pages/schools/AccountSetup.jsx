import React, { useState, useEffect, useRef } from "react";
import ImageOne from "../../assets/onboarding/account-setup.png";
import ImageTwo from "../../assets/onboarding/activate-fundraising.png";
import ImageThree from "../../assets/onboarding/engage-n-grow.png";
import ImageFour from "../../assets/onboarding/contributions-delivered.png";
import { Link } from "react-router-dom";

const AccountSetup = () => {
  const data = [
    {
      image: ImageOne,
      heading: "Set up your account",
      description:
        "Sign up in under 5 minutes, enter your information, fundraising initiatives, goals, and social content to make your dashboard more engaging.",
    },
    {
      image: ImageTwo,
      heading: "Activate your fundraising dashboard",
      description:
        "Access your custom dashboard with QR codes and start sharing the best ways for your community to support you.",
    },
    {
      image: ImageThree,
      heading: "Engage and grow",
      description:
        "Receive real-time support from your community, post social content, host silent auctions, and access live volunteer vetting for seamless engagement.",
    },
    {
      image: ImageFour,
      heading: "Weekly contributions delivered",
      description:
        "Enjoy 100% of your supporters’ contributions delivered to you weekly—directly and efficiently!",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRefs = useRef([]);

  const handleScroll = () => {
    const scrollTop = window.scrollY + window.innerHeight / 2;
    const stepIndex = sectionRefs.current.findIndex(
      (section) =>
        section.offsetTop <= scrollTop &&
        section.offsetTop + section.offsetHeight > scrollTop
    );
    if (stepIndex !== currentStep) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 800);
      setTimeout(() => setCurrentStep(stepIndex !== -1 ? stepIndex : 0), 500);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentStep]);

  return (
    <div className="bg-[#172132] text-white lg:min-h-screen px-4" id="accountsetpup">
      <div className="max-w-[1280px] mx-auto hidden lg:flex">
        {/* Left Side: Text */}
        <div className="w-1/2">
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="h-screen flex items-center justify-center max-w-[460px] w-full"
            >
              <div
                className={`transition-opacity duration-500 ${currentStep === index ? "opacity-100" : "opacity-30"}`}
              >
                <h2 className="text-[48px] leading-[125%] text-white mb-4 font-axiforma-r">
                  {item.heading}
                </h2>
                <p className="mb-4 text-[#ffffffcc] text-base">
                  {item.description}
                </p>

                <Link to="/EOI"
                  className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center w-fit justify-center"
                >
                  Interested? Click here
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Fixed Image */}
        <div className="w-1/2 flex items-center justify-center sticky top-10 h-screen">
          {data.map((item, index) => (
            <div
              key={index}
              className={`w-full h-[569px] flex items-center relative text-scroll-fade-image ${currentStep === index ? "active" : ""}`}
            >
              <img
                src={item.image}
                alt={item.heading}
                className="inset-0 w-full h-auto object-contain max-h-[569px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-[60px] md:py-[80px] lg:hidden flex flex-col gap-y-12">
        {data.map((item, index) => (
          <div key={index}>
            <div className="h-[300px] xs:h-[400px] sm:h-[720px] w-full mb-8">
              <img src={item.image} alt="" className="object-cover aspect-[1/1] rounded-[32px] h-full w-full" />
            </div>

            <div>
              <h2 className="text-[32px] sm:text-[48px] leading-[1.4] sm:leading-[125%] text-white mb-4 font-axiforma-r">
                {item.heading}
              </h2>
              <p className="mb-4 text-[#ffffffcc] text-base">
                {item.description}
              </p>

              <Link to="/EOI"
                className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center w-fit justify-center"
              >
                Interested? Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSetup;
