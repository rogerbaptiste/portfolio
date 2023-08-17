import React from "react"
import { About } from "../pages/About"

import { Contact } from "../pages/Contact"
import { Counter } from "../pages/Counter"
import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import { Testimonials } from "../pages/Testimonials"
import { Hero } from "./Hero"
import { Technology } from "../pages/Technology"

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Technology />
            <Services />
            <Counter />
            <Portfolio />
            <Testimonials />
            <Contact />
        </>
    )
}