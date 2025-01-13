import styles from "../styles/footer.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            &copy; Copyright {new Date().getFullYear()} by TravelBook.
        </div>
    );
}

export default Footer;
