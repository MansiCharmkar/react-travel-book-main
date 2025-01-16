import CityItem from "./CityItem";
import styles from "../styles/cityList.module.css";
import { useCities } from "../contexts/citiesContext";

function CityList() {
    const { cities } = useCities();
    return (
        <ul className={styles.cityList}>
            {cities.map(function (city) {
                return <CityItem city={city} key={city.id} />;
            })}
        </ul>
    );
}

export default CityList;
