import { formatDate } from "../helper";
import styles from "../styles/cityItem.module.css";

function CityItem({ city }) {
    const { cityName, emoji, date, id, position } = city;

    return (
        <li>
            <div className={styles.cityItem}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.cityName}>{cityName}</h3>
                <time className={styles.time}>{formatDate(date)}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </div>
        </li>
    );
}

export default CityItem;
