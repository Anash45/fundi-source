import React from "react";
import { IoArrowDown } from "react-icons/io5";


const Hero = () => {
  return (
      <section
          className="letter-of-intent-hero overflow-hidden mt-[72px] rounded-b-[40px] lg:rounded-b-[80px] relative bg-no-repeat bg-center bg-cover px-4">
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
        <div
            className="max-w-[1280px] z-40 relative w-full mx-auto lg:pt-16 lg:pb-24 pb-16 pt-20 md:min-h-auto xxl:min-h-[65vh] xl:max-h-[650px] md:max-h-[650px] md:h-screen md:min-h-[350px] min-h-[450px] flex items-center">
          <div className="max-w-[700px] relative">
            <h2 className="text-[30px] md:text-[46px] leading-[1.2] md:leading-[1.25] text-white font-axiforma-r mb-4 relative">
              A feature packed platform <br className="xs:hidden sm:block"/>
              to empower your organisation
            </h2>

            <p className="text-white mb-6 hidden md:block">
              Organisations face constant challenges in engaging their communities, especially in the digital age.
              Traditional fundraising methods often miss out on scalable solutions like recurring donations or round-up
              options.
              <br/>
              Empower supporters with multiple ways to give, including round-ups, weekly subscriptions, or one-time
              donations. —where social sharing, online silent auctions, verified volunteers, and automated tax receipts
              are all at your fingertips.
            </p>
          </div>

          <a href="#letter-of-intent"
             className="cursor-pointer w-12 h-12 text-2xl rounded-full absolute bottom-5 md:bottom-20 xxl:bottom-16 xxl:bottom-16 left-1/2 -translate-x-1/2 animate-bouncingDown text-white border border-white flex items-center justify-center">
            <IoArrowDown/>
          </a>
        </div>

        <div className="absolute inset-0 bg-black/35"></div>
      </section>
  );
};

export default Hero;
