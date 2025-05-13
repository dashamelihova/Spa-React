import React from 'react';

import styles from './AddParametr.module.css';
import icon from '../../assets/artboard.svg';

interface AddParametrProps{
    text: string;
    addItem: () => void;
}

const AddParametr: React.FC<AddParametrProps> =({text, addItem}) => {

    return(
        <div className={styles.addParametrContainer}>
            <button className={styles.addParametrButton} onClick={addItem} type="button">
                <img 
                    className={styles.addParametrButtonIcon} 
                    src={icon}
                     alt="Add New Parametr"
                />
            </button>
            <p className={styles.addParametrHelpText}>
                {text}
            </p>  
        </div>
    );
}

export default AddParametr;