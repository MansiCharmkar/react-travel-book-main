import { NavLink } from "react-router";
import styles from "../styles/appNav.module.css";

function AppNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.active}>
                    <NavLink to="cities">Cities</NavLink>
                </li>
                <li>
                    <NavLink to="countries">Countries</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default AppNav;
