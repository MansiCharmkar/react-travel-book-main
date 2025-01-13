import style from "../styles/logo.module.css";

function Logo() {
    return (
        <div className={style.logo}>
            <img src="/logo.png" alt="logo" />
        </div>
    );
}

export default Logo;
