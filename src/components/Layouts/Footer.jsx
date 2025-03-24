
import './Styles/Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
        <footer className="Footer mt-20 py-10">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-xl">
                            <ScrollLink
                                to="hero"
                                smooth={true}
                                duration={150}
                                spy={true}
                                offset={0}
                                className=""
                            >
                                {/* CLOCHERT */}
                            </ScrollLink>
                        </h3>
                    </div>
                    <div className="flex gap-4 justify-between sm:justify-evenly text-sm font-light">
                        <div>
                            <p className="px-2 py-1 opacity-50">Campany</p>
                            <ul>
                                <li>
                                    <ScrollLink
                                        to="about"
                                        smooth={true}
                                        duration={150}
                                        spy={true}
                                        offset={-100}
                                        className="px-2 py-1 custom-hover-effect"
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
                                        className="px-2 py-1 custom-hover-effect"
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
                                        className="px-2 py-1 custom-hover-effect"
                                    >
                                        Contact
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="px-2 py-1 opacity-50">Email</p>
                            <ul>
                                <li>
                                    <a href="mailto:thomasc@gmail.com" target='_blank' className="px-2 py-1 custom-hover-effect">thomasc@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-start sm:items-center w-full justify-between flex-col sm:flex-row">
                    <ul className='flex items-center gap-2'>
                        <li>
                            <a href="https://www.instagram.com/thomasclochert/" target="_blank" className='bg-white/10 p-2 rounded-lg flex custom-hover-effect-move'><FaFacebook /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/thomasclochert/" target="_blank" className='bg-white/10 p-2 rounded-lg flex custom-hover-effect-move'><FaInstagram /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/thomasclochert/" target="_blank" className='bg-white/10 p-2 rounded-lg flex custom-hover-effect-move'><FaLinkedin /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/thomasclochert/" target="_blank" className='bg-white/10 p-2 rounded-lg flex custom-hover-effect-move'><FaXTwitter /></a>
                        </li>
                    </ul>
                    <p className='text-sm font-light mt-6 sm:mt-0'>
                        &copy; 2025. Thomas Clochert
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
