import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"
import Toggle from "../../assets/Svg/Toggle/Toggle"
import './Styles/Header.css'
import { motion } from "framer-motion"

const HeaderSecond = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className={`NavBar-second ${toggle ? 'active' : ''} bg-transparent text-slate-700 absolute z-50 top-8 left-1/2 -translate-x-1/2 w-full`}>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.5 }}
                className="container lg:min-w-[70%] mx-auto flex flex-wrap justify-between lg:grid lg:grid-cols-3 place-items-center gap-8">
                <h1 className="flex-1 lg:col-span-1 text-center font-bold">
                    <ScrollLink
                        to="hero"
                        smooth={true}
                        duration={150}
                        spy={true}
                        offset={0}
                        className="px-8 font-PlayFair w-fit mr-auto lg:mx-auto tracking-[4px]"
                        onClick={() => setToggle(false)}
                    >
                        CLOCHERET
                    </ScrollLink>
                </h1>
                {/* MENU  */}
                <ul className={`Menu-bar lg:col-span-2 w-full flex justify-evenly items-center uppercase font-black text-[13px] tracking-[1px] gap-4 ${toggle ? 'active' : ''}`}>
                    <li>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={150}
                            spy={true}
                            offset={-100}
                            className="p-5"
                            onClick={() => setToggle(false)}
                        >
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="earlier-life"
                            smooth={true}
                            duration={150}
                            spy={true}
                            offset={-100}
                            className="p-5"
                            onClick={() => setToggle(false)}
                        >
                            Earlier Life
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="work"
                            smooth={true}
                            duration={150}
                            spy={true}
                            offset={-100}
                            className="p-5"
                            onClick={() => setToggle(false)}
                        >
                            Companies
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={150}
                            spy={true}
                            offset={-100}
                            onClick={() => setToggle(false)}
                            className="p-5"
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
                {/* TOGGLE  */}
                <div className="block lg:hidden flex-1" onClick={() => setToggle(!toggle)}>
                    <div className="ml-auto w-fit stroke-slate-700">
                        <Toggle toggle={toggle} />
                    </div>
                </div>
            </motion.div>
        </nav>
    )
}

export default HeaderSecond
