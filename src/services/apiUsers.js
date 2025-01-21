import { validPassword } from "../helper";

const baseURL = `http://localhost:3000`;

export async function getUserByEmail(emailAddress) {
    console.log(emailAddress);
    const response = await fetch(`${baseURL}/users?email=${emailAddress}`);
    const data = await response.json();
    console.log(data);
    return data.at(0) || null;
}

export async function loginUser(emailAddress, password) {
    if (!validPassword(password))
        throw new Error(
            "Password must be 8+ chars with at least 1 uppercase, 1 lowercase, and 1 number.",
            { cause: "password-error" }
        );

    const user = await getUserByEmail(emailAddress);

    if (!user)
        throw new Error("No user found with this email !", {
            cause: "form-error",
        });
    else {
        if (password === user.password) return user;
        else
            throw new Error("Wrong email and password !", {
                cause: "form-error",
            });
    }
}
export async function signUpUser({ name, email, password }) {
    if (!name || !email || !password)
        throw new Error("User input fields missing !", { cause: "form-error" });

    if (!validPassword(password))
        throw new Error(
            "Password must be 8+ chars with at least 1 uppercase, 1 lowercase, and 1 number.",
            { cause: "password-error" }
        );

    const response = await fetch(`${baseURL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, password: password }),
    });
    const data = await response.json();
    return data;
}
