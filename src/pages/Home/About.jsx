import { motion } from "framer-motion"
import { useRef } from "react"

const About = () => {
    const scrollRef = useRef(null);

    return (
        <section className='pt-16' id="about" ref={scrollRef}>
            <motion.div className="container h-full">
                <h3 className="custom-bg-secondary py-1 px-3 w-fit rounded-2xl text-sm">About</h3>
                <motion.div className="grid gap-6 grid-cols-1 xl:grid-cols-8 mt-3"
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { delay: 0.1, duration: 0.5, ease: 'easeIn' }
                    }}
                    viewport={{ root: scrollRef }}
                >
                    <div className="col-span-3">
                        <h4 className="text-3xl font-normal sm:w-[300px]">From passion to profession</h4>
                    </div>
                    <div className="col-span-5">
                        <h5 className="text-xl sm:text-2xl font-normal">My journey began in 2018, when i first discovered my passion for each industry</h5>
                        <p className="mt-4">
                            With over 5 years of experience in tech industry, I have honed my skills in tech. My
                            journey began with an insatiable curiosity for how things work, a curiosity that led me to explore the vast world of technology.
                            From a young age, I was captivated by computers and gadgets, spending countless hours disassembling and reassembling them to understand
                            their inner workings. This early fascination laid the foundation for what would become a lifelong pursuit of knowledge and innovation.
                            <br /><br />
                            Throughout my career, I have been driven by a belief in the power of collaboration and continuous growth.
                            I firmly believe that the best results come from working together, sharing ideas, and learning from each other.
                            This philosophy has been the cornerstone of my approach to every project I undertake.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About
