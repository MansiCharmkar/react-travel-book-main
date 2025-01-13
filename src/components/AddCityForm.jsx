import styles from "../styles/addCityForm.module.css";
import BackButton from "./BackButton";
function AddCityForm() {
    return (
        <div className={styles.addCityForm}>
            <form>
                <div>
                    <label>City name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>When did you go to #cityName</label>
                    <input type="date" />
                </div>
                <div>
                    <label>How was your experience !</label>
                    <textarea rows="4" cols="50">
                        Description about #cityName
                    </textarea>
                </div>
                <div className={styles.buttonBox}>
                    <button type="primary">Add</button>
                    <BackButton />
                </div>
            </form>
        </div>
    );
}
export default AddCityForm;
