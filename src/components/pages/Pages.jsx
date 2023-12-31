import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../common/Footer";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { About } from "./About";
import { Technology } from "./Technology";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import emailjs from 'emailjs-com';


export const Pages = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/technology" element={<Technology/>}/>
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};
