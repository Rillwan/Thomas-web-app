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
                        <h4 className="text-3xl font-normal sm:w-[300px]">From Curiosity to Innovation</h4>
                    </div>
                    <div className="col-span-5">
                        <h5 className="text-xl sm:text-2xl font-normal">My journey began in 2018, when i first discovered my passion for each industry</h5>
                        <p className="mt-4">
                            My journey into technology and entrepreneurship began in 2018, fueled by my passion for gaming and curiosity about how digital worlds
                            operate. At just 15, I launched my YouTube channel, Nite Gamic, where I specialized in data-mining Fortnite's game files, uncovering
                            hidden music and creating engaging content that attracted millions of views and thousands of followers.
                            <br /><br />
                            This early success sparked my deeper interest in coding and digital innovation, inspiring me to dive into software development and
                            technology. Driven by a desire to innovate and make an impact, I founded multiple ventures, continuously expanding my skillset and entrepreneurial experience.
                            <br /><br />
                            I believe strongly in collaboration, continuous growth, and sharing knowledge, values that underpin every project and partnership I undertake. Today, my work 
                            spans industries, from music and gaming to e-commerce and retail technology, always driven by a passion for innovation and delivering tangible impact.
                            <br />
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About
