import React from 'react'
import Hero from './Hero'
import About from './About'
import Work from './Work'
import './Home.css'
import Contact from './Contact'
import HeroSecond from './HeroSecond'
import Companies from './Companies'

const HomePage = () => {
    return (
        <div className="HomePage">
            {/* HERO SECTION  */}
            {/* <Hero /> */}
            <HeroSecond />
            {/* COMPANY SECTION */}
            <Companies />
            {/* ABOUT SECTION  */}
            <About />
            {/* WORK SECTION  */}
            <Work />
            {/* CONTACT SECTION  */}
            <Contact />
        </div>
    )
}

export default HomePage
