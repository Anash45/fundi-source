import React from "react";

const TabsNavigation = () => {
  return (
    <section className="hidden sm:block relative px-4 py-[60px] md:py-[100px]">
      <div className="w-full lg:max-w-[900px] mx-auto">
        <p class="mb-5 font-medium text-[#8D8D92] text-center">
          A complete fundraising platform.
        </p>

        <ul class="gap-2 flex flex-wrap justify-center">
          <li>
            <a
              href="#popularfeaturesforschools"
              class="text-[15px] leading-normal px-[25px] py-[11px] text-[#494951] border border-[#D1D1D3] rounded-[80px] block w-fit transition-[border, background, color] duration-500 hover:bg-[#f0f5ff] hover:border-[#d6e2fc] hover:text-night-black"
            >
              Popular features for schools
            </a>
          </li>

          <li>
            <a
              href="#howitworks"
              class="text-[15px] leading-normal px-[25px] py-[11px] text-[#494951] border border-[#D1D1D3] rounded-[80px] block w-fit transition-[border, background, color] duration-500 hover:bg-[#f0f5ff] hover:border-[#d6e2fc] hover:text-night-black"
            >
              How it all works
            </a>
          </li>

          <li>
            <a
              href="#allfeatures"
              class="text-[15px] leading-normal px-[25px] py-[11px] text-[#494951] border border-[#D1D1D3] rounded-[80px] block w-fit transition-[border, background, color] duration-500 hover:bg-[#f0f5ff] hover:border-[#d6e2fc] hover:text-night-black"
            >
              All features
            </a>
          </li>

          <li>
            <a
              href="#securitycompliance"
              class="text-[15px] leading-normal px-[25px] py-[11px] text-[#494951] border border-[#D1D1D3] rounded-[80px] block w-fit transition-[border, background, color] duration-500 hover:bg-[#f0f5ff] hover:border-[#d6e2fc] hover:text-night-black"
            >
              Security & compliance
            </a>
          </li>

          <li>
            <a
              href="#"
              class="text-[15px] leading-normal px-[25px] py-[11px] text-[#494951] border border-[#D1D1D3] rounded-[80px] block w-fit transition-[border, background, color] duration-500 hover:bg-[#f0f5ff] hover:border-[#d6e2fc] hover:text-night-black"
            >
              Real-time insights
            </a>
          </li>

          <li>
            <a
              href="#"
              class="text-[15px] leading-normal px-[25px] py-[11px] text-[#494951] border border-[#D1D1D3] rounded-[80px] block w-fit transition-[border, background, color] duration-500 hover:bg-[#f0f5ff] hover:border-[#d6e2fc] hover:text-night-black"
            >
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TabsNavigation;
