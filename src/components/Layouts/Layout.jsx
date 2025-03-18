import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="Layout">
            <div className="Pages">
                <Header />
                {/* ------ Children --------  */}
                <div>
                    <Outlet />
                </div>
                {/* ---------------- Footer ---------------- */}
                <Footer />
            </div>
        </div>
    )
}

export default Layout
