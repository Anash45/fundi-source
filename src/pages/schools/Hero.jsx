import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EfficiencyImg from "../../assets/efficiency.jpg";
import FundraisingImg from "../../assets/fundraising.jpg";
import SchoolCommunityImg from "../../assets/school-community.jpg";
import RealSupportImg from "../../assets/real-support.jpg";

const Hero = () => {
  const titles = [
    "efficiency",
    "fundraising",
    "school community",
    "real support",
  ];

  const images = [
    EfficiencyImg,
    FundraisingImg,
    SchoolCommunityImg,
    RealSupportImg,
  ];

  const bgColors = [
    "bg-blue-600",
    "bg-green",
    "bg-blue-600",
    "bg-blue",
  ];

  const [currentTitle, setCurrentTitle] = useState("");
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentBgColor, setCurrentBgColor] = useState(bgColors[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typingIndex < titles[wordIndex].length) {
        setCurrentTitle((prev) => prev + titles[wordIndex][typingIndex]);
        setTypingIndex((prev) => prev + 1);
  
        // Update image and background color with each letter typed
        setCurrentImage(images[wordIndex]);
        setCurrentBgColor(bgColors[wordIndex]);
      } else {
        clearInterval(typingInterval);
        setIsTypingFinished(true);
      }
    }, 100);
  
    return () => clearInterval(typingInterval);
  }, [typingIndex, wordIndex]);

  useEffect(() => {
    if (isTypingFinished) {
      setCurrentImage(images[wordIndex]);

      setCurrentBgColor(bgColors[wordIndex]);

      const delay = setTimeout(() => {
        setIsTypingFinished(false);
        setTypingIndex(0);
        setCurrentTitle("");
        setWordIndex((prev) => (prev + 1) % titles.length);
      }, 2000);

      return () => clearTimeout(delay);
    }
  }, [isTypingFinished, wordIndex]);

  const isLightText =
    currentBgColor === "bg-blue" || currentBgColor === "bg-green";
  const textColor = isLightText ? "text-white" : "text-gray-900";

  return (
    <section className={`${currentBgColor} px-4 mt-[72px] relative overflow-x-clip pt-[60px] md:pt-[80px] pb-[60px] md:pb-[80px] transition-[background] duration-[.6s] ease-in-out`}>
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="flex-col flex gap-x-16 lg:flex-row gap-y-[30px] sm:gap-y-[60px]">
          <div className="relative flex items-center z-index-10 lg:w-1/2">
            <div className="gap-y-6 flex flex-col">
              <h1
                className={`text-[40px] md:text-6xl mb-4 leading-[44px] md:leading-[76.8px] font-axiforma-r ${textColor}`}
              >
                <p className="block">Reimagine</p>
                <span className="w-fit block last-word">
                  {currentTitle}
                  <span aria-hidden="true"></span>
                </span>
              </h1>
              <p
                className={`lg:max-w-[380px] ${isLightText ? "text-gray-300" : "text-[#494953]"
                  }`}
              >
                Empower your school community to fundraise easily and effectively.
              </p>
              <Link
                to="https://calendly.com/fundi-au/fundi-demo-call"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#ff5a65] hover:bg-[#ff3d5a] text-[15px] text-white font-medium py-[0.625rem] px-[1.5rem] rounded-full transition-colors flex items-center w-fit justify-center">
                  Book a demo
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-7/12 w-full flex items-center lg:justify-end justify-start">
            <div className="relative flex items-center justify-start w-full">
              <div className="w-full max-w-full lg:max-w-[627px] transition-[opacity] duration-[.6s] ease-in-out h-[321px] md:h-[445px]">
                <img
                  src={currentImage}
                  alt="Hero Image"
                  className="rounded-[32px] md:rounded-[80px] max-w-full w-full lg:max-w-[527px] xl:max-w-[627px] h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
