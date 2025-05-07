import styles from "./Button.module.css";
import icon from "../../assets/magic-wand.svg";

function Button({children}){

    return(
        <button className={styles.button}>
            <img src={icon} alt="Icon" />
            {children}
        </button>
    );
}

export default Button;