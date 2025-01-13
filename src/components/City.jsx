import styles from "../styles/city.module.css";
import { formatDate } from "../helper";
import { GoArrowLeft } from "react-icons/go";
import BackButton from "./BackButton";

const tempCity = {
    cityName: "Devdaha",
    country: "Nepal",
    emoji: "🇳🇵",
    date: "2024-10-26T04:53:08.130Z",
    notes: "This is a note about Devdaha",
    position: {
        lat: "27.60323689456203",
        lng: "83.55926513671876",
    },
    id: 3,
};

function City() {
    const { emoji, cityName, notes, date } = tempCity;
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
