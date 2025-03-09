import React from "react";
import Icon1 from "../../assets/features-icons/1.png"
import Icon2 from "../../assets/features-icons/2.png"
import Icon3 from "../../assets/features-icons/3.png"
import Icon4 from "../../assets/features-icons/4.png"
import Icon5 from "../../assets/features-icons/5.png"
import Icon6 from "../../assets/features-icons/6.png"
import Icon7 from "../../assets/features-icons/7.png"
import Icon8 from "../../assets/features-icons/8.png"
import Icon9 from "../../assets/features-icons/9.png"
import Icon10 from "../../assets/features-icons/10.png"
import Icon11 from "../../assets/features-icons/11.png"
import Icon12 from "../../assets/features-icons/12.png"
import Icon13 from "../../assets/features-icons/13.png"
import Icon14 from "../../assets/features-icons/14.png"
import Icon15 from "../../assets/features-icons/15.png"

const featuresdata = [
  {
    icons: Icon1,
    title: "All-in-one fundraising dashboard",
    disc: "Access a centralised dashboard to manage your entire fundraising campaign, track progress, and view real-time contributions from supporters.",
  },

  {
    icons: Icon2,
    title: "Customisable club profile",
    disc: "Showcase your club’s mission, goals, and fundraising initiatives on a personalised profile that engages your community.",
  },

  {
    icons: Icon3,
    title: "Supporter dashboard",
    disc: "Provide each supporter with a dedicated dashboard where they can track their contributions, view campaign updates, and monitor their impact.",
  },

  {
    icons: Icon4,
    title: "Easy sign-up with QR codes",
    disc: "Generate custom QR codes or links that direct supporters, making it easy for members, fans, and local businesses to get involved instantly.",
  },

  {
    icons: Icon5,
    title: "Multiple donation options",
    disc: "Offer flexible donation methods such as spare change round-ups, weekly subscriptions, or one-time contributions to maximise giving opportunities.",
  },

  {
    icons: Icon6,
    title: "Gamified rankings and rewards",
    disc: "Motivate and engage your club community with a gamified ranking system that encourages friendly competition and celebrates top supporters.",
  },

  {
    icons: Icon7,
    title: "Real-time project updates",
    disc: "Keep supporters informed with live progress tracking, so they can see the direct impact of their contributions as your goals come closer to reality.",
  },

  {
    icons: Icon8,
    title: "Social media sharing tools",
    disc: "Easily share milestones and updates on social media to amplify your reach and inspire more supporters to join your cause.",
  },

  {
    icons: Icon9,
    title: "Live volunteer vetting (Vetti™)",
    disc: "Access Vetti™, our live volunteer vetting service, ensuring that only trusted individuals are involved in your fundraising efforts.",
  },

  {
    icons: Icon10,
    title: "Interactive supporter maps",
    disc: "Visualise supporter locations on a geographic map, providing insight into community reach and encouraging broader involvement.",
  },

  {
    icons: Icon11,
    title: "Automated tax receipting",
    disc: "Eliminate the hassle of tax documentation with automatic receipting for all donations, simplifying year-end processes for supporters and your club.",
  },
  {
    icons: Icon12,
    title: "Seamless financial support",
    disc: "Receive 100% of supporter contributions with no hidden fees or deductions, ensuring every dollar goes toward your club’s needs.",
  },

  {
    icons: Icon13,
    title: "Silent auction platform (Silenti)",
    disc: "Access Silenti, an online silent auction feature, allowing your club to host exclusive fundraising events with ease.",
  },

  {
    icons: Icon14,
    title: "Weekly payouts",
    disc: "Enjoy consistent cash flow with weekly deposits, ensuring your club has regular access to 100% of funds raised for essential initiatives.",
  },

  {
    icons: Icon15,
    title: "Data export and reporting",
    disc: "Download detailed analytics reports on fundraising activities, supporter data, and financial contributions to understand your supporters.",
  },
];

const AllFeatures = () => {
  const firstGroup = featuresdata.slice(0, -3); 
  const lastGroup = featuresdata.slice(-3);
  return (
    <section id="allfeatures" className="flex flex-col mx-auto pt-[60px] md:pt-[80px] pb-[60px] md:pb-[80px] bg-[#f8f5f2] px-4">
      <div className="relative max-w-[1280px] mx-auto flex flex-col gap-12">
        <p className="text-[#1c1d24] text-[40px] text-start float-start font-axiforma-r">
          All Features
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 md:gap-y-8">
          {firstGroup.map((features, index) => (
            <li
              key={index}
              className="md:pl-7 md:border-l md:border-[#d1d1d3]"
            >
              <img
                src={features.icons}
                alt={features.title}
                className="h-12 mb-4"
                loading="lazy"
              />
              <h3 className="font-bold text-lg leading-normal text-[#1c1d24] font-axiforma-r mb-3">
                {features.title}
              </h3>
              <p className="text-[#494951]">{features.disc}</p>
            </li>
          ))}
        </ul>

        {/* Last Group */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-8 max-w-[950px] mx-auto">
          {lastGroup.map((features, index) => (
            <li
              key={index}
              className="md:pl-7 md:border-l md:border-[#d1d1d3]"
            >
              <img
                src={features.icons}
                alt={features.title}
                className="h-12 mb-4"
                loading="lazy"
              />
              <h3 className="font-bold text-lg leading-normal text-[#1c1d24] font-axiforma-r mb-3">
                {features.title}
              </h3>
              <p className="text-[#494951]">{features.disc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AllFeatures;
