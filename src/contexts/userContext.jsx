import { createContext, useContext, useReducer } from "react";
import { loginUser, signUpUser } from "../services/apiUsers";

const UserContext = createContext();
const initialState = {
    user: null,
    error: {},
    loading: false,
};

const reducer = function (state, action) {
    switch (action.type) {
        case "user/login":
            return { ...state, loading: false, user: action.payload };
        case "user/signup":
            return { ...state, loading: false, user: action.payload };
        case "user/logout":
            return { ...initialState };
        case "error":
            return {
                ...state,
                loading: false,
                error: {
                    type: action.payload.type,
                    message: action.payload.message,
                },
            };
        case "loading":
            return { ...state, loading: true };
        default:
            return new Error(
                `No Action found with the name : "${action.type}"`
            );
    }
};

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { user, error, loading } = state;

    async function handleSignUp(newUser, action = () => {}) {
        try {
            dispatch({ type: "loading" });
            const user = await signUpUser(newUser);
            dispatch({ type: "user/signup", payload: user });
            action();
        } catch (error) {
            dispatch({
                type: "error",
                payload: { type: error.cause, message: error.message },
            });
        }
    }
    async function handleLogin({ emailAddress, password }, action = () => {}) {
        console.log(emailAddress);
        try {
            dispatch({ type: "loading" });
            const user = await loginUser(emailAddress, password);
            dispatch({ type: "user/login", payload: user });
            action();
        } catch (error) {
            dispatch({
                type: "error",
                payload: { type: error.cause, message: error.message },
            });
        }
    }
    function handleLogout() {
        dispatch({ type: "user/logout" });
    }
    return (
        <UserContext.Provider
            value={{
                user: user,
                error: error,
                loading: loading,
                handleSignUp: handleSignUp,
                handleLogin: handleLogin,
                handleLogout: handleLogout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined)
        throw new Error("Trying to access context outside the provider");
    return context;
}
