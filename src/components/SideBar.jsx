import style from "../styles/sideBar.module.css";
import LogoBox from "../components/LogoBox";
import AppNav from "./AppNav";
import Footer from "./Footer";

import { Outlet } from "react-router";

function SideBar() {
    return (
        <div className={style.sideBar}>
            <LogoBox />
            <AppNav />

            <Outlet />

            <Footer />
        </div>
    );
}

export default SideBar;
