import { useEffect, useState } from "react";

function fetchCurrentCoords() {
    return new Promise(function (resolve, reject) {
        function success(position) {
            return resolve([
                position.coords.latitude,
                position.coords.longitude,
            ]);
        }
        function error(error) {
            console.log(error);
            return reject(error);
        }
        navigator.geolocation.getCurrentPosition(success, error);
    });
}

function useCurrentCoords(lat, lng) {
    const [position, setPosition] = useState([lat, lng]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(function () {
        (async function () {
            try {
                setLoading(true);
                setPosition(await fetchCurrentCoords());
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    return { position, error, loading };
}

export default useCurrentCoords;
