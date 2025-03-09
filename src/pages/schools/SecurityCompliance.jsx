import React from "react";
import SecurityComplianceImg from "../../assets/security-&-compliance.png";
import { Link } from "react-router-dom";

const SecurityCompliance = () => {
  return (
    <section id="securitycompliance" className="px-4 pt-[60px] md:pt-[100px] pb-[30px] md:pb-[80px]">
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex gap-x-16 gap-y-[30px] xs:gap-y-[60px] flex-col lg:flex-row items-center relative">
          <div className="w-full lg:w-6/12 justify-start items-start flex relative lg:h-[550px]">
            <img
              src={SecurityComplianceImg}
              alt="Security & compliance"
              className="rounded-[32px] min-h-auto object-cover h-auto w-full"
              loading="lazy"
            />
          </div>

          <div className="w-full lg:w-6/12 justify-end items-center flex relative">
            <div className="gap-y-6 flex flex-col w-full lg:w-auto">
              <h1 className="text-[48px] text-[#1c1d24] leading-[125%] font-axiforma-r md:max-w-[350px]">
                Security & compliance
              </h1>

              <p className="text-[#494951] md:max-w-[500px] w-full">
                We are proud to be partnered with Stripe and Basiq, ensuring your data and transactions are always secure. Stripe is a leader in payment processing, certified to PCI Service Provider Level 1—the highest security standard in the industry. Basiq ensures bank-grade security and encryption for round-up donations. With Fundi, you can trust that every transaction is safeguarded by the best in the business.
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
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
