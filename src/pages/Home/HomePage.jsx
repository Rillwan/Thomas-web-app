import React from 'react'
import Hero from './Hero'
import About from './About'
import Work from './Work'
import './Home.css'
import Contact from './Contact'

const HomePage = () => {
    return (
        <div className="HomePage">
            {/* HERO SECTION  */}
            <Hero />
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
