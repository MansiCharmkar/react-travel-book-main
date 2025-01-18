import styles from "../styles/spinner.module.css";
function Spinner() {
    return (
        <div className={styles.loaderBox}>
            <div className={styles.loader}></div>
        </div>
    );
}

export default Spinner;
