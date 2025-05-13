import React, { ChangeEvent } from 'react'; // Импортируем React и тип для событий

import styles from './InputParametr.module.css';

interface InputParametrProps{
    title: string;
    startParam: number;
    name: string;
}

const InputParametr: React.FC<InputParametrProps> = ({ title, startParam, name}) => {

    //const [param, setParam] = React.useState<string>('');

    return(
        <div className={styles.inputParameter}>
            <label className={styles.inputParameterLabel} htmlFor={name}>
                {title}
            </label>  
            <input 
                className={styles.inputParameterInput}
                type="number" 
                placeholder={startParam.toString()} 
                id={name}
                
                //defaultValue={startParam}
                //value={param}
                name={name}
                min="0"
            />
        </div>
    );
    
}

export default InputParametr;