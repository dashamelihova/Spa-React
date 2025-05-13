import React from "react";

import styles from "./Button.module.css";
import icon from "../../assets/magic-wand.svg";

interface ButtomProps{
    children: React.ReactNode;
}

const Button: React.FC<ButtomProps> = ({children}) => {
    return(
        <button className={styles.button} type="submit" form="Form">
            <img src={icon} alt="Icon" />
            {children}
        </button>
    );
}

export default Button;