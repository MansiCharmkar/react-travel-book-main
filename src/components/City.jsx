import styles from "../styles/city.module.css";
import { formatDate } from "../helper";
import { GoArrowLeft } from "react-icons/go";
import BackButton from "./BackButton";
import { useCities } from "../contexts/citiesContext";
import Spinner from "./Spinner";

function City() {
    const { city, loading: apiLoading } = useCities();
    const { emoji, cityName, notes, date } = city;

    if (apiLoading) {
        return <Spinner />;
    }
    return (
        <div className={styles.city}>
            <div className={styles.row}>
                <h6>City-name</h6>
                <h3>
                    <span className={styles.emoji}>{emoji}</span> {cityName}
                </h3>
            </div>

            <div className={styles.row}>
                <h6>You went to {cityName} on</h6>
                <p>{formatDate(date || null)}</p>
            </div>

            {notes && (
                <div className={styles.row}>
                    <h6>Your notes</h6>
                    <p>{notes}</p>
                </div>
            )}

            <div className={styles.row}>
                <h6>Learn more</h6>
                <a
                    href={`https://en.wikipedia.org/wiki/${cityName}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    More about {cityName} &rarr;
                </a>
            </div>

            <div className={styles.backButton}>
                <BackButton />
            </div>
        </div>
    );
}

export default City;
