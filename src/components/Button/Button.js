import styles from "./Button.module.css";
import icon from "../../assets/magic-wand.svg";

function Button({children, getFormInfo}){
    
    return(
        <button className={styles.button} type="submit" form="Form" onClick={getFormInfo}>
            <img src={icon} alt="Icon" />
            {children}
        </button>
    );
}

export default Button;