import CLogo from '../../assets/Svg/Logo/CLogo'
// import Logo from '../../assets/Svg/Logo/Logo'

const FooterSecond = () => {
    return (
        <footer className="Footer-second mt-20">
            <div className="container py-16 flex items-center flex-col sm:flex-row gap-8 sm:gap-6 justify-between font-PlayFair uppercase border-0 border-t border-solid border-slate-500/50">
                <div>
                    <h3 className="tracking-[4px] font-semibold uppercase">
                        <CLogo color={"White"} />
                    </h3>
                </div>
                <div>
                    <ul className="flex flex-row gap-4 items-center text-xs tracking-[2px] font-DMSans">
                        <li>
                            <a href="https://www.linkedin.com/in/thomas-clocheret"
                                target="_blank" rel="noopener noreferrer"
                            >LinkedIn</a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/ThomasClocheret"
                                target="_blank" rel="noopener noreferrer">Twitter</a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/thomasclocheret/"
                                target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterSecond
