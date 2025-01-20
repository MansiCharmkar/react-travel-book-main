import Nav from "../components/Nav";
import style from "../styles/login.module.css";
import LogoBox from "../components/LogoBox";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import { useState } from "react";

function LoginPage() {
    const [showLogin, setShowLogin] = useState(true);
    function toggleLogin() {
        setShowLogin(function (showLogin) {
            return !showLogin;
        });
    }
    return (
        <div className={style.loginPage}>
            <Nav />
            <main className={style.loginSection}>
                <div>
                    <div className={style.imageContainer}>
                        <img src="./login.jpg" alt="loading.." />
                    </div>
                    <div className={style.formContainer}>
                        <LogoBox />
                        {showLogin && (
                            <>
                                <LoginForm />
                                <button onClick={toggleLogin}>
                                    Do not have account? Sign Up
                                </button>
                            </>
                        )}

                        {!showLogin && (
                            <>
                                <SignUpForm />
                                <button onClick={toggleLogin}>
                                    Already have account? Login
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LoginPage;
