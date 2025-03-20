import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
import HeaderSecond from "./HeaderSecond";
import FooterSecond from "./FooterSecond";

const Layout = () => {
    return (
        <div className="Layout">
            <div className="Pages">
                {/* <Header /> */}
                <HeaderSecond />
                {/* ------ Children --------  */}
                <div>
                    <Outlet />
                </div>
                {/* ---------------- Footer ---------------- */}
                {/* <Footer /> */}
                <FooterSecond />
            </div>
        </div>
    )
}

export default Layout
