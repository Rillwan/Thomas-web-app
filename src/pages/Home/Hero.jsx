import React from 'react'
import HeroBg from '../../assets/Images/bg-hero.png'
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className='Hero-section h-screen' style={{ backgroundImage: `url(${HeroBg})` }} id='hero'>
            <div className="container relative h-full">
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[275px] xs:w-[300px] sm:w-[450px] custom-transition'>
                    <div className='text-center'>
                        <div className='text-4xl sm:text-6xl'>
                            <h2 className='font-medium leading-[2.5rem] sm:leading-[3.5rem]'>
                                Hi,I'm Thomas Clocheret, a Founder & Visionary Leader
                            </h2>
                        </div>
                        <p className='mt-4 text-base mx-auto max-w-[300px] font-light'>Explore My Journey and the innovation projects I've led success</p>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            whileInView={{
                                opacity: 1, y: 0
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={150}
                                spy={true}
                                offset={-100}
                                className="px-4 py-2 mt-4 mx-auto bg-white text-black rounded-md w-fit custom-hover-effect-move"
                            >
                                Contact
                            </ScrollLink>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
