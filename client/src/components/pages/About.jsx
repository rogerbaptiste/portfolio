import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"

export const About = () => {
    return (
        <>
            <section className='about'>
                <div className='container flex'>
                    {about.map((val) => (
                        <>
                            <div className='left' data-aos='fade-down-right'>
                                <img src={val.cover} alt='' />
                            </div>
                            <div className='right' data-aos='fade-down-left'>
                                <Heading title='About Me' />
                                <p>{val.desc}</p>
                                <p>{val.desc1}</p>
                                <a href="https://www.dropbox.com/scl/fi/1na1pmxron2mxxoadamu1/Software-Developer-Resume-Roger-Baptiste.pdf?rlkey=vxzfnuhty05mrmhuf0wdv5vum&dl=0" download=" Resume for Roger Baptiste .pdf">
                                    <button>Download Resume</button>
                                </a>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}