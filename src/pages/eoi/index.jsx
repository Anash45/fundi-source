import React from "react";
import Header from "../../components/Header";
import Hero from "./Hero";
import Footer from "../../components/Footer";
import LetterOfIntent from "./LetterOfIntent";
import SimplifiesOperations from "../home/SimplifiesOperations";
import Technology from "../home/Technology";

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
