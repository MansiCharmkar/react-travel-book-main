import { useNavigate } from "react-router";
import styles from "../styles/map.module.css";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/citiesContext";
import Emoji from "./Emoji";
import useCurrentCoords from "../hooks/useCurrentCoords";

const newYorkCoords = [40.712776, -74.005974];

function Map() {
    // const navigate = useNavigate();
    // const latVal = "34.47443328617457";
    // const lngVal = "103.36212158203125";
    // // const latVal = "11.25741626205941";
    // // const lngVal = "63.76464843750001";

    // function handleClick() {
    //     return navigate(`form?lat=${latVal}&lng=${lngVal}`);
    // }
    // return (
    //     <div className={styles.map}>
    //         <button onClick={handleClick}>Click here!</button>
    //     </div>
    // );

    const { cities, city } = useCities();
    const [centerPos, setCenterPos] = useState(newYorkCoords);
    const { position: currPosition } = useCurrentCoords(...newYorkCoords);

    useEffect(
        function () {
            setCenterPos(currPosition);
        },
        [currPosition]
    );

    useEffect(
        function () {
            setCenterPos(function (centerPos) {
                if (city.position?.lat && city.position?.lng)
                    return [city.position.lat, city.position.lng];
                else return centerPos;
            });
        },
        [city]
    );

    return (
        //23.259933, and the longitude is 77.412613
        <div className={styles.mapContainer}>
            <MapContainer
                className={styles.map}
                center={centerPos}
                zoom={5}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />

                <ListenMapClick />
                <ChangeCenter position={centerPos} />

                {cities.map(function (city) {
                    return (
                        <Marker
                            position={[city.position.lat, city.position.lng]}
                            key={city.id}
                        >
                            <Popup>
                                <span>
                                    <Emoji txt={city.emoji} />
                                    &nbsp;&nbsp;&nbsp;
                                    {city.cityName}
                                </span>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
}

function ListenMapClick() {
    const navigate = useNavigate();
    useMapEvents({
        click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });
    return null;
}
function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

export default Map;
