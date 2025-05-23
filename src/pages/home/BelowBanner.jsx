import React from "react";
import Image from "../../assets/for-schools/why-fundi-for-schools.png";
import Image1 from "../../assets/Home-img-1.png";
import Image2 from "../../assets/Home-img-2.png";

const BelowBanner = () => {
  const fundraisingSteps = [
    {
      step: "STEP 1",
      title: "Click. You're live.",
      description:
        "Launch your entire fundraising platform in under 5 minutes. No contracts. No hosting fees. Receive 100% of supporter donations.",
    },
    {
      step: "STEP 2",
      title: "Start receiving donations instantly.",
      description:
        "One-time, weekly, or round-up — all fully automated and secure.",
    },
    {
      step: "STEP 3",
      title: "Share your QR code.",
      description: "Supporters join in seconds. No apps. No forms.",
    },
    {
      step: "STEP 4",
      title: "Supporters sign up instantly.",
      description:
        "With QR scan and facial recognition, there's zero friction.",
    },
    {
      step: "STEP 5",
      title: "Grow your impact.",
      description:
        "Run fundraising campaigns. Host auctions. Accept donations. Vet volunteers instantly. All from your all-in-one Fundi dashboard.",
    },
  ];
  return (
    <section className="pt-[60px] md:pt-[100px] pb-[30px] md:pb-[100px]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex-col flex gap-x-16 gap-y-8 lg:flex-row-reverse relative">
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pl-4 pr-4 xl:pr-0">
            <div className="gap-y-6 flex flex-col w-full">
              <h1 className="md:max-w-[600px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                Because fundraising should be powerful, not painful.
              </h1>

              <p className="md:max-w-[550px] text-[#494951]">
                Fundi was built on a simple belief: Australia's schools, clubs,
                churches, and charities deserve better. <br />
                <br />
                For decades, community fundraising has relied on outdated,
                time-consuming methods — chocolate drives, raffle books, sausage
                sizzles. These approaches burden volunteers, limit reach, and
                fail to engage the next generation of givers.
                <br />
                <br />
                At Fundi, we believe everyone should be able to support their
                community effortlessly, and that the act of giving should feel
                personal, transparent, and rewarding. We exist to empower
                organisations to raise more, waste less time, and build lifelong
                supporter loyalty — all through technology that actually works
                for them.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-6/12 relative pl-5 2xl:pl-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex items-center">
            <img
              src={Image1}
              alt=" Why Fundi for schools"
              loading="lazy"
              className="object-cover h-auto w-full min-h-auto max-w-[700px] lg:absolute left-0 2xl:-left-[20%]"
            />
          </div>
        </div>
      </div>
      <div className="relative max-w-[1280px] mx-auto pt-[60px]">
        <div className="flex-col flex gap-x-16 gap-y-8 lg:flex-row relative">
          <div className="w-full lg:w-6/12 lg:items-center justify-start items-center flex relative pr-4 pl-4 xl:pl-0">
            <div className="gap-y-6 flex flex-col w-full">
              <h1 class="md:max-w-[600px] text-[40px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                How Fundi Works
              </h1>

              {fundraisingSteps.map((step, idx) => (
                <div className="home-step mb-3">
                  <h3 class="text-[20px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                    {step.step}
                  </h3>
                  <h4 class="text-[20px] text-[#1c1d24] leading-[125%] font-axiforma-r">
                    {step.title}
                  </h4>
                  <p className="md:max-w-[550px] text-[#494951] mb-0">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-6/12 relative pl-5 2xl:pl-0 h-[80vw] lg:h-auto lg:min-h-[650px] flex items-start">
            <img
              src={Image2}
              alt=" Why Fundi for schools"
              loading="lazy"
              className="object-cover  sticky top-[80px] h-auto w-full min-h-auto max-w-[700px]"
            />
          </div>
        </div>

        <p className="text-[#494951] text-base inter-f text-center mt-8">
          Whether you lead a school, manage a sports club, run a church, or
          drive a grassroots charity. Fundi puts world-class fundraising tools
          at your fingertips. <br />
          It's not just better fundraising.
          It's a smarter way to grow your community.
        </p>
      </div>
    </section>
  );
};

export default BelowBanner;
