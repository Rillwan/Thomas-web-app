import React from 'react'
import { WorkData } from './HomeData';
import { useRef } from "react"
import { motion } from "framer-motion"

const Work = () => {
    const scrollRef = useRef(null);

    return (
        <section className='Work-section mt-20' id='work'>
            <div className="container h-full">
                <h3 className="custom-bg-secondary py-1 px-3 w-fit rounded-2xl text-sm mx-auto">Work</h3>
                <h4 className='text-2xl sm:text-3xl max-w-[500px] mx-auto font-normal text-center mt-4 capitalize'>Discover how my early passion evolved into a thriving entrepreneurial career</h4>
                {/* CARDS  */}
                <div className="cards grid grid-cols-1 gap-40 mt-8 max-w-[500px] mx-auto" ref={scrollRef}>
                    {
                        WorkData?.map((item, i) => (
                            <motion.div className="card rounded-xl p-4 sm:p-6" key={i}
                                initial={{ 
                                    scale:1.1
                                 }}
                                whileInView={{
                                    scale: 1,
                                    transition: { delay: 0, duration: 0.3, ease: 'easeIn' }
                                }}
                                viewport={{ root: scrollRef }}
                            >
                                <div className='grid gap-8 sm:gap-10'>
                                    <div className='flex items-center justify-between'>
                                        <img
                                            className='rounded-full object-contain w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-[#4E4E4E]'
                                            src={item?.image} alt="" />
                                        <span className='text-4xl sm:text-6xl font-medium'>{item?.year}</span>
                                    </div>
                                    <div className=''>
                                        <h3 className='font-normal text-2xl'>{item?.title}</h3>
                                        <p className='opacity-40 mt-2'>{item?.sub}</p>
                                        <p className='mt-2 font-light'>
                                            {item?.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Work
