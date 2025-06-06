import React, { useEffect, useState, useRef } from "react";
import FundiLogo from "../assets/fund-logo.png";
import aus from "../assets/aus.png";
import fr from "../assets/fr.svg";
import es from "../assets/es.svg";
import { Link } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // State for selected language and its flag
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    flag: aus,
  });

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Update both language name and flag image
  const handleLanguageSelect = (language, flag) => {
    setSelectedLanguage({ name: language, flag: flag });
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed w-full left-0 top-0 transition-all duration-300 px-4 z-50 ${
        isDropdownOpen
          ? "bg-white backdrop-blur-none"
          : isScrolled
          ? "bg-white/50 backdrop-blur-lg"
          : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-2 sm:gap-10 max-w-[1280px] w-full mx-auto min-h-[72.5px] md:py-[20px] lg:py-3.5 z-50">
        <div className="flex items-center gap-9">
          <Link to="/" className="relative z-[60]">
            <img
              src={FundiLogo}
              alt="FundiLogo"
              className="h-10"
              style={{
                mixBlendMode: "screen",
                opacity: 0.9,
              }}
            />
          </Link>
          <ul className="hidden lg:flex items-center flex-1">

            <li>
              <Link
                  to="/for-clubs"
                  className="inter-f text-[15px] text-night-black block py-4 lg:py-2.5 lg:pl-3 px-4 lg:px-3 underline-offset-2 hover:underline transition-all duration-300"
              >
                For clubs
              </Link>
            </li>

            <li>
              <Link
                  to="/for-churches"
                  className="inter-f text-[15px] text-night-black block py-4 lg:py-2.5 lg:pl-3 px-4 lg:px-3 underline-offset-2 hover:underline transition-all duration-300"
              >
                For churches
              </Link>
            </li>

            <li>
              <Link
                  to="/for-schools"
                  className="inter-f text-[15px] text-night-black block py-4 lg:py-2.5 lg:pl-3 px-4 lg:px-3 underline-offset-2 hover:underline transition-all duration-300"
              >
                For schools
              </Link>
            </li>

            <li className="hidden">
              <Link
                  to="/pricing"
                  className="inter-f text-[15px] text-night-black block py-4 lg:py-2.5 lg:pl-3 px-4 lg:px-3 underline-offset-2 hover:underline transition-all duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                  to="/for-charities"
                  className="inter-f text-[15px] text-night-black block py-4 lg:py-2.5 lg:pl-3 px-4 lg:px-3 underline-offset-2 hover:underline transition-all duration-300"
              >
                For charities
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-4">
            <div className="relative lg:block hidden">
              <img
                  src={selectedLanguage.flag}
                  alt="SelectedFlag"
                  className="w-8 cursor-pointer mr-2"
                  onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div
                  className="absolute left-0 right-0 bg-white rounded-lg mt-1 shadow-lg w-[105px]"
                  ref={dropdownRef}
                >
                  <ul className="pt-1">
                    <li
                      className="py-2 px-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                      onClick={() => handleLanguageSelect("English", aus)}
                    >
                      <img
                        src={aus}
                        alt="EnglishFlag"
                        className="w-6 h-6 object-contain"
                      />
                      <span>English</span>
                    </li>
                    <li
                      className="py-2 px-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                      onClick={() => handleLanguageSelect("French", fr)}
                    >
                      <img
                        src={fr}
                        alt="FrenchFlag"
                        className="w-6 h-6 object-contain"
                      />
                      <span>French</span>
                    </li>
                    <li
                      className="py-2 px-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                      onClick={() => handleLanguageSelect("Spanish", es)}
                    >
                      <img
                        src={es}
                        alt="SpanishFlag"
                        className="w-6 h-6 object-contain"
                      />
                      <span>Spanish</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="#"
              className="text-night-black text-[15px] inter-f hidden lg:block"
            >
              Login
            </Link>
            <a
              href="/EOI"
            >
              <button className="bg-[#ff5a65] border border-[#ff5a65] text-white rounded-[80px] text-xs md:text-[15px] font-medium cursor-pointer py-2 md:py-[.625rem] px-3 md:px-[1.5rem] transition-colors duration-300 inter-f hover:bg-[#db4550]">
                Register your interest
              </button>
            </a>

            <button
              className={`flex lg:hidden ${isDrawerOpen ? "invisible" : ""}`}
              onClick={toggleDrawer}
            >
              <HiBars2 className="text-3xl cursor-pointer text-night-black" />
            </button>
            <div
              className={`absolute top-6 right-5 z-[50] ${
                isDrawerOpen ? "" : "hidden"
              }`}
            >
              <button onClick={toggleDrawer} className="text-2xl">
                <IoMdClose className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Design */}
      <div
        className={`fixed top-0 left-0 w-full h-[100vh] bg-white z-40 transition-all duration-300 transform ${
          isDrawerOpen
            ? "translate-y-0 opacity-1"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* Drawer Content */}
        <div className="flex flex-col justify-start h-full px-5 pt-20">
          <div className="flex flex-col">
            <Link
              to="/for-schools"
              className="md:text-lg text-night-black font-medium py-4 border-b"
            >
              For Schools
            </Link>

            <Link
              to="/for-clubs"
              className="md:text-lg text-night-black font-medium py-4 border-b"
            >
              For Clubs
            </Link>

            <Link
              to="/for-churches"
              className="md:text-lg text-night-black font-medium py-4 border-b"
            >
              For Churches
            </Link>

            <Link
              to="/pricing"
              className="md:text-lg text-night-black font-medium py-4 border-b"
            >
              Pricing
            </Link>
          </div>

          {/* Custom Language Dropdown */}
          <div className="relative w-full">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full py-4 md:text-lg text-night-black font-medium border-b"
            >
              <div className="flex items-center gap-2">
                <img
                  src={selectedLanguage.flag}
                  alt="SelectedFlag"
                  className="w-6 h-6 object-contain"
                />
                <span>{selectedLanguage.name}</span>
              </div>
              <MdKeyboardArrowDown className="text-xl" />
            </button>

            {isDropdownOpen && (
              <div
                className="left-0 right-0 bg-white rounded-lg"
                ref={dropdownRef2}
              >
                <ul className="pt-1">
                  <li
                    className="py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    onClick={() => handleLanguageSelect("English", aus)}
                  >
                    <img
                      src={aus}
                      alt="aus"
                      className="w-6 h-6 object-contain"
                    />
                    <span>English</span>
                  </li>
                  <li
                    className="py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    onClick={() => handleLanguageSelect("French", fr)}
                  >
                    <img
                      src={fr}
                      alt="FrenchFlag"
                      className="w-6 h-6 object-contain"
                    />
                    <span>French</span>
                  </li>
                  <li
                    className="py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    onClick={() => handleLanguageSelect("Spanish", es)}
                  >
                    <img
                      src={es}
                      alt="SpanishFlag"
                      className="w-6 h-6 object-contain"
                    />
                    <span>Spanish</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col w-full gap-4 pt-4">
            {/* Login Button */}
            <Link
              to="#"
              className="text-[#ff5a65] border border-[#ff5a65] rounded-full text-center text-[15px] font-[500] py-[0.625rem] px-[1.5rem]"
              onClick={toggleDrawer}
            >
              Login
            </Link>

            {/* Book a Demo Button */}
            <button
              onClick={toggleDrawer}
              className="bg-[#ff5a65] text-white font-[500] py-3 px-5 rounded-full w-full hover:bg-[#db4550] transition-colors text-[15px]"
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
