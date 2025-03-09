import React from "react";
import Header from "../../components/Header";
import Hero from "./Hero";
import Footer from "../../components/Footer";
import LetterOfIntent from "./LetterOfIntent";

const EOI = () => {

    return (
        <div>
            <Header />

            <div className="bg-[#f2f5f8]">
                <Hero />
            </div>
            <LetterOfIntent />

            <Footer />
        </div>
    );
};

export default EOI;
