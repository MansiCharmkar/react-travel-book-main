import { NavLink } from "react-router";
import style from "../styles/nav.module.css";

function Nav() {
    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className={style.loginBtn}>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
