import { useEffect, useState } from "react";
import { useCities } from "../contexts/citiesContext";
import useQueryParams from "../hooks/useQueryParams";
import styles from "../styles/addCityForm.module.css";
import BackButton from "./BackButton";
import Message from "./Message";
import { formatDateForInputValue, getFlagEmoji } from "../helper";
import Spinner from "./Spinner";
import { useNavigate } from "react-router";

const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

function AddCityForm() {
    const { handleAddCity, loading: apiLoading, error: apiError } = useCities();
    const [lat, lng] = useQueryParams("lat", "lng");

    const [isLoading, setIsLoading] = useState(false);
    const [cityNotFound, setCityNotFound] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const [cityDetails, setCityDetails] = useState({
        cityName: "",
        country: "",
        emoji: "",
        date: new Date().toISOString(),
        notes: "",
        position: {
            lat: "",
            lng: "",
        },
    });

    useEffect(
        function () {
            async function fetchCityDetails() {
                try {
                    setIsLoading(true);
                    const url = `${BASE_URL}?latitude=${lat}&longitude=${lng}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    const cityName = data.city;

                    if (!cityName) {
                        setCityNotFound(true);
                        resetCityDetails();
                        return;
                    }

                    setCityDetails(function (cityDetails) {
                        const updatedCityDetails = {
                            ...cityDetails,
                            cityName: data.city || data.locality,
                            country: data.countryName,
                            emoji: getFlagEmoji(data.countryCode),
                            notes: `A note about ${data.city || data.locality}`,
                            position: {
                                lat: lat,
                                lng: lng,
                            },
                        };

                        return updatedCityDetails;
                    });
                } catch (error) {
                    setError(error.Message);
                } finally {
                    setIsLoading(false);
                }
            }
            if (lat && lng) fetchCityDetails();
        },
        [lat, lng]
    );

    function resetCityDetails() {
        return setCityDetails({
            cityName: "",
            country: "",
            emoji: "",
            date: new Date().toISOString(),
            notes: "",
            position: {
                lat: "",
                lng: "",
            },
        });
    }

    function handleDateChange(e) {
        setCityDetails(function (cityDetails) {
            return {
                ...cityDetails,
                date: new Date(e.target.value).toISOString(),
            };
        });
    }

    function handleNotesChange(e) {
        setCityDetails(function (cityDetails) {
            return { ...cityDetails, notes: e.target.value };
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await handleAddCity(cityDetails);
        navigate("/app/cities");
    }

    if (isLoading) {
        return <Spinner />;
    }

    if (!lat || !lng || cityNotFound) {
        return <Message emoji="😯" txt="Oops No City Found" />;
    }

    if (error || apiError) {
        return <Message emoji="💥" txt={error} />;
    }

    return (
        <div
            className={`${styles.addCityForm} ${
                apiLoading ? styles.deactivate : ""
            }`}
        >
            <form onSubmit={handleSubmit}>
                <div>
                    <label>City name</label>
                    <input
                        type="text"
                        defaultValue={cityDetails.cityName}
                        disabled={true}
                    />
                </div>
                <div>
                    <label>When did you go to #cityName</label>
                    <input
                        type="date"
                        value={formatDateForInputValue(cityDetails.date)}
                        onChange={handleDateChange}
                    />
                </div>
                <div>
                    <label>How was your experience !</label>
                    <textarea
                        rows="4"
                        cols="50"
                        value={cityDetails.notes}
                        onChange={handleNotesChange}
                    />
                </div>
                <div className={styles.buttonBox}>
                    <BackButton />
                    <button type="primary">Add</button>
                </div>
            </form>
        </div>
    );
}
export default AddCityForm;
