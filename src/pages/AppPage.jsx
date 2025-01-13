import SideBar from "../components/SideBar";
import Map from "../components/Map";
import style from "../styles/appPage.module.css";

function AppPage() {
    return (
        <div className={style.appPage}>
            <SideBar />
            <Map />
        </div>
    );
}

export default AppPage;
