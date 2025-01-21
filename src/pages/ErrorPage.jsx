import { useNavigate } from "react-router";
import Emoji from "../components/Emoji";
import Nav from "../components/Nav";
import { GoArrowLeft } from "react-icons/go";

function ErrorPage() {
    const navigate = useNavigate();
    return (
        <>
            <Nav />
            <div
                style={{
                    fontSize: "4rem",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "2rem",
                    marginTop: "6rem",
                }}
            >
                <p>
                    <Emoji txt="🤕" />
                    &nbsp;&nbsp;404 Page Not Found !
                </p>
                <button
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        fontSize: "2.5rem",
                        padding: "1rem 1.6rem",
                        borderRadius: "0.5rem",
                        backgroundColor: "#fcc419",
                    }}
                    onClick={() => navigate(-1)}
                >
                    <GoArrowLeft />
                    &nbsp; Go Back
                </button>
            </div>
        </>
    );
}

export default ErrorPage;
