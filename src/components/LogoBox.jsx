import { Link } from "react-router";
import Logo from "./Logo";

function LogoBox() {
    return (
        <Link to={"/"}>
            <div className="logoBox">
                <Logo />
                <span>TravelBook</span>
            </div>
        </Link>
    );
}

export default LogoBox;
