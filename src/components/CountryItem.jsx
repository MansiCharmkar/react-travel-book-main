import styles from "../styles/countryItem.module.css";

function CountryItem({ country }) {
    const coutryName =
        country.countryName.length > 10
            ? `${country.countryName.slice(0, 10)}...`
            : country.countryName;
    return (
        <div className={styles.country}>
            <div className={styles.flag}>{country.flag}</div>
            <p className={styles.name}>{coutryName}</p>
        </div>
    );
}

export default CountryItem;
