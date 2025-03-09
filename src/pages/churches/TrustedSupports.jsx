import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-marquee-slider";
import Logo1 from "../../assets/church logos/1.png";
import Logo2 from "../../assets/church logos/2.png";
import Logo3 from "../../assets/church logos/3.png";
import Logo4 from "../../assets/church logos/4.png";
import Logo5 from "../../assets/church logos/5.png";
import Logo6 from "../../assets/church logos/6.png";
import Logo7 from "../../assets/church logos/7.png";
import Logo8 from "../../assets/church logos/8.png";
import Logo9 from "../../assets/church logos/9.png";
import Logo11 from "../../assets/church logos/11.png";
import Logo12 from "../../assets/church logos/12.png";
import Logo13 from "../../assets/church logos/13.png";
import Logo14 from "../../assets/church logos/14.png";
import Logo15 from "../../assets/church logos/15.png";
import Logo16 from "../../assets/church logos/16.png";
import Logo17 from "../../assets/church logos/17.png";

const TrustedSupports = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [velocity, setVelocity] = useState(8);
  const icons = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo11,
    Logo12,
    Logo13,
    Logo14,
    Logo15,
    Logo16,
    Logo17,
  ];

  const getLogoStyle = () => {
    return {
      filter: "grayscale(100%) brightness(45%) contrast(100%)",
      backgroundColor: "transparent",
      mixBlendMode: "normal",
    };
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVelocity(3);
      } else {
        setVelocity(8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pt-[60px] md:pt-[80px] pb-[60px] md:pb-[80px] overflow-hidden">
      <div
        className="w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Marquee Slider */}
        <Marquee
          velocity={isHovered ? 0 : velocity}
          minScale={0.7}
          resetAfterTries={200}
          direction="rtl"
        >
          {/* Mapping over the icons */}
          {icons.concat(icons).map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="banner-icon"
              className="max-h-16 md:max-h-20 w-auto my-0 md:mx-10 mx-7 object-contain"
              loading="lazy"
              style={getLogoStyle()}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedSupports;
