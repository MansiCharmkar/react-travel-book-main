import { useNavigate } from "react-router";
import styles from "../styles/map.module.css";

function Map() {
    const navigate = useNavigate();
    const latVal = "34.47443328617457";
    const lngVal = "103.36212158203125";

    function handleClick() {
        return navigate(`form?lat=${latVal}&lng=${lngVal}`);
    }
    return (
        <div className={styles.map}>
            <button onClick={handleClick}>Click here!</button>
        </div>
    );
}

export default Map;
