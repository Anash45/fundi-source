import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import ForSchools from "./pages/schools";
import ForClubs from "./pages/clubs";
import ForChurches from "./pages/churches";
import Pricing from "./pages/pricing/page";
import ScrollToTop from "./components/ScrollToTop";
import EOI from "./pages/eoi";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-schools" element={<ForSchools />} />
        <Route path="/for-clubs" element={<ForClubs />} />
        <Route path="/for-churches" element={<ForChurches />} />
        <Route path="/EOI" element={<EOI />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
