import React from "react";

import styles from "./Button.module.css";
import icon from "../../assets/magic-wand.svg";

interface ButtomProps{
    children: React.ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    formName: string;
    //function 
    onClick: (() => void) | undefined;
}

const Button: React.FC<ButtomProps> = ({children, type, formName = undefined, onClick = undefined}) => {
    return(
        <button className={styles.button} type={type} form={formName} onClick={onClick}>
            <img src={icon} alt="Icon" />
            {children}
        </button>
    );
}

export default Button;