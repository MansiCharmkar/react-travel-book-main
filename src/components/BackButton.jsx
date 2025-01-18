import { GoArrowLeft } from "react-icons/go";
import styles from "../styles/backButton.module.css";
import { useNavigate } from "react-router";
function BackButton() {
    const navigate = useNavigate();
    function handleBack(e) {
        e.preventDefault(); // stop submitting
        navigate(-1);
    }
    return (
        <button onClick={handleBack} className={styles.backButton}>
            <GoArrowLeft /> <span>Back</span>
        </button>
    );
}
export default BackButton;
