import CountryItem from "./countryItem";
import styles from "../styles/countryList.module.css";
import { useCities } from "../contexts/citiesContext";

function CountryList() {
    const { cities } = useCities();
    // With key-value pair
    const countryListObj = cities.reduce(function (acc, city) {
        const key = city.country;
        acc[key] = { countryName: city.country, flag: city.emoji };
        return acc;
    }, {});

    const countryListArr = Object.values(countryListObj);

    return (
        <div className={styles.countryList}>
            {countryListArr.map(function (country) {
                return (
                    <CountryItem country={country} key={country.countryName} />
                );
            })}
        </div>
    );
}

export default CountryList;
