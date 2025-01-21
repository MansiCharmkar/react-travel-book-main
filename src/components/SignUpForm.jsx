import { useState } from "react";
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router";
import FormError from "./FormError";

function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { handleSignUp, loading, error } = useUser();
    const passwordError = error.type === "password-error";

    const navigate = useNavigate();

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    function handleSubmit(e) {
        e.preventDefault();
        handleSignUp({ name: name, email: email, password: password }, () =>
            navigate("/app")
        );
    }
    return (
        <>
            <h1>Create New Account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        disabled={loading}
                        required
                    />
                </div>

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
                <button>{loading ? "Signing up..." : "Sign Up"}</button>
            </form>
        </>
    );
}

export default SignUpForm;
