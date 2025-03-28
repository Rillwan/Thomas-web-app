import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top-left corner of the window
    }, [pathname]); // Runs this effect whenever the route changes

    return null; // This component does not render anything
};

export default ScrollToTop;