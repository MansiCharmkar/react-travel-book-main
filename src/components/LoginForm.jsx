import { useState } from "react";
import Emoji from "./Emoji";
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router";
import FormError from "./FormError";

function LoginForm() {
    const [email, setEmail] = useState("mani@gmail.com");
    const [password, setPassword] = useState("Mani12345");

    const { handleLogin, loading, error } = useUser();
    const passwordError = error.type === "password-error";

    // console.dir(error);

    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin({ emailAddress: email, password: password }, () =>
            navigate("/app")
        );
    }
    return (
        <>
            <h1>
                Get Started <Emoji txt="✈️" />
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        disabled={loading}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                        {passwordError && <FormError txt={error.message} />}
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        disabled={loading}
                        required
                    />
                </div>

                {!passwordError && <FormError txt={error.message} />}
                <button>{loading ? "Loging in..." : "Login"}</button>
            </form>
        </>
    );
}

export default LoginForm;
