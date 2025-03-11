import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToFAQ = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faq") {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        setTimeout(() => {
          faqSection.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay to ensure the section is rendered
      }
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default ScrollToFAQ;
