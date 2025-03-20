import HeroBg from '../../assets/Images/bg-hero-2.webp'

const HeroSecond = () => {
    return (
        <section className='Hero-section h-screen' style={{ backgroundImage: ` linear-gradient(to top, #000, #000000a8 16%, #0000 41%),url(${HeroBg})` }} id='hero'>
            <div className="container relative h-full">
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 custom-transition mix-blend-difference'>
                    <div className='text-center'>
                        <div className=''>
                            <h2 className='text-[10vw] sm:text-[16vh] font-PlayFair tracking-[18px] text-[#ebebeb] mix-blend-normal font-medium'
                            >THOMAS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSecond
