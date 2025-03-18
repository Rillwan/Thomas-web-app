import Toggle from "../../assets/Svg/Toggle/Toggle"
import './Styles/Header.css'
import { useState } from "react"
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className={`NavBar ${toggle ? 'active' : ''} backdrop-blur-[12px] rounded-xl bg-white/20 fixed z-50 top-3 left-1/2 -translate-x-1/2 sm:min-w-[70%] md:min-w-[50%]  w-[92%] sm:w-fit`}>
            <div className="flex p-3 sm:p-[7px] items-center gap-r-4 justify-between flex-wrap">
                <h1>
                    <ScrollLink
                        to="hero"
                        smooth={true}
                        duration={150}
                        spy={true}
                        offset={0}
                        className="px-2"
                        onClick={() => setToggle(false)}
                    >
                        CLOCHERET
                    </ScrollLink>
                </h1>
                {/* MENU  */}
                <ul className={`Menu-bar flex gap-4 ${toggle ? 'active' : ''}`}>
                    <li>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={150}
                            spy={true}
                            offset={-100}
                            className="py-1 px-2"
                            onClick={() => setToggle(false)}
                        >
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="work"
                            smooth={true}
                            duration={150}
                            spy={true}
                            offset={-100}
                            className="py-1 px-2"
                            onClick={() => setToggle(false)}
                        >
                            Work
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
                            className="contact-btn px-3 py-1 mx-2 mb-2 sm:m-0 bg-white text-black rounded-md text-center"
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
                {/* TOGGLE  */}
                <div className="block sm:hidden" onClick={() => setToggle(!toggle)}>
                    <Toggle toggle={toggle} />
                </div>
            </div>
        </nav>
    )
}

export default Header
