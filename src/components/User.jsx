import { useUser } from "../contexts/userContext";
import styles from "../styles/user.module.css";

function User() {
    const { user, handleLogout, loading } = useUser();
    return (
        <div className={styles.userBox}>
            <div className={styles.imageBox}>
                <img src="https://i.pravatar.cc/300" alt={user.name} />
            </div>
            <span className={styles.text}>
                Welcome, {user.name.split(" ")[0]}
            </span>
            <button onClick={handleLogout}>
                {loading ? "wait..." : "Logout"}
            </button>
        </div>
    );
}

export default User;
