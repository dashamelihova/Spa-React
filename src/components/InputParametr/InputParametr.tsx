import React, { ChangeEvent } from 'react'; // Импортируем React и тип для событий

import styles from './InputParametr.module.css';

interface InputParametrProps{
    title: string;
    startParam: number;
    name: string;
    onUpdateInputParam: (param: string) => void;
}

const InputParametr: React.FC<InputParametrProps> = ({ title, startParam, name, onUpdateInputParam}) => {

    const [param, setParam] = React.useState<string>('');

    const onGetdateInputParam = (e: ChangeEvent<HTMLInputElement>) =>{
        const newParam = e.target.value ;
        // if (param){|| this.props.startParam
        //     this.setState({param});
        // }
        // else{
        //     this.setState({param : this.props.startParam});
        // }
        setParam(newParam);
        onUpdateInputParam(newParam);
    };

    
    // const onGetInputParam = (e: ChangeEvent<HTMLInputElement>) => {
    //     const newParam = e.target.value;
    //     if (newParam === '' || Number(newParam) >= 0) {
    //         setParam(newParam);
    //         onUpdateInputParam(newParam);
    //     }
    // };
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
                onChange={onGetdateInputParam}
                value={param}
            />
        </div>
    );
    
}

export default InputParametr;