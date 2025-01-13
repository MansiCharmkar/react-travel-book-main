import { Link } from "react-router";
import Nav from "../components/Nav";
import style from "../styles/HomePage.module.css";
import { GoArrowRight } from "react-icons/go";
import Logo from "../components/Logo";

function HomePage() {
    return (
        <div className={style.homePage}>
            <Nav />
            <section className={style.hero}>
                <div>
                    <Logo />
                    <h1>
                        Keep Travelling <br /> We are here to Track you
                    </h1>
                    <p>
                        A world map that tracks your footsteps into every city
                        you can think of. Never forget your wonderful
                        experiences, and show your friends how you have wandered
                        the world.
                    </p>
                    <Link to="/login" className={style.cta}>
                        <span>Start Tracking Now</span> <GoArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
