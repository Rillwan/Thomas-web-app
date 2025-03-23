import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"
import Toggle from "../../assets/Svg/Toggle/Toggle"
import './Styles/Header.css'
import { motion } from "framer-motion"

const NavMenu = {
    left: [
        {
            name: 'About',
            link: 'about',
        },
        {
            name: 'Earlier-Life',
            link: 'earlier-life',
        },
    ],
    right: [
        {
            name: 'Companies',
            link: 'company',
        },
        {
            name: 'Contact',
            link: 'contact',
        },
    ]
}


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
                className="container lg:min-w-[90%] flex justify-between lg:grid grid-cols-3 place-items-center">
                <div className="hidden font-black text-[13px] tracking-[1px] lg:grid grid-cols-2 place-items-center w-full">
                    {
                        NavMenu?.left?.map((item, index) => (
                            <ScrollLink
                                key={index}
                                to={item?.link}
                                smooth={true}
                                duration={150}
                                spy={true}
                                offset={-100}
                                className="p-5 col-span-1 uppercase"
                                onClick={() => setToggle(false)}
                            >
                                {
                                    item?.name
                                }
                            </ScrollLink>
                        ))
                    }
                </div>
                <div>
                    <h1 className="text-center font-bold">
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
                </div>
                <div className="hidden font-black text-[13px] tracking-[1px] lg:grid grid-cols-2 place-items-center w-full">
                    {
                        NavMenu?.right?.map((item, index) => (
                            <ScrollLink
                                key={index}
                                to={item?.link}
                                smooth={true}
                                duration={150}
                                spy={true}
                                offset={-100}
                                className="p-5 col-span-1 uppercase"
                                onClick={() => setToggle(false)}
                            >
                                {
                                    item?.name
                                }
                            </ScrollLink>
                        ))
                    }
                </div>
                {/* RESPONSIVE MENU */}
                <div className={`Responsive-Menu grid lg:hidden font-black text-[13px] tracking-[1px] ${toggle ? 'active' : ''} `}>
                    {
                        NavMenu?.left?.map((item, index) => (
                            <ScrollLink
                                key={index}
                                to={item?.link}
                                smooth={true}
                                duration={150}
                                spy={true}
                                offset={-100}
                                className="p-5 uppercase"
                                onClick={() => setToggle(false)}
                            >
                                {
                                    item?.name
                                }
                            </ScrollLink>
                        ))
                    }
                    {
                        NavMenu?.right?.map((item, index) => (
                            <ScrollLink
                                key={index}
                                to={item?.link}
                                smooth={true}
                                duration={150}
                                spy={true}
                                offset={-100}
                                className="p-5 uppercase"
                                onClick={() => setToggle(false)}
                            >
                                {
                                    item?.name
                                }
                            </ScrollLink>
                        ))
                    }
                </div>
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
