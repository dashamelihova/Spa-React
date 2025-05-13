import React, { ChangeEvent } from 'react';

import styles from './ChooseParametr.module.css';

interface ChooseParametrItemProps {
    children: string;
    name: string;
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isChosen: boolean;
    value: number[];
}

const ChooseParametrItem: React.FC<ChooseParametrItemProps>=({children, name, id, onChange, isChosen, value}) => {
    
    return(
        < >
            <input 
                type="radio" 
                id={id} 
                name={name} 
                className={styles.radio}
                onChange={onChange}
                checked={isChosen} 
                value={value.toString()}
            />
            <label htmlFor={id} className={styles.radioLabel}> {children} </label>
        </>
    );
}


function formatParam(param: number[]):  string{

  return param.map(num => (num === 0 ? '0' : `${num}м`)).join(' x ');
}

interface ChooseParametrProps{
    dataArray: {param: number[], isChosen: boolean}[];
    name: string;
    onSelect: (param: number[]) => void;
}

const ChooseParametr: React.FC<ChooseParametrProps> = ({dataArray, name, onSelect}) => {
    const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSelect(e.target.value.split(',').map(parseFloat))
    };

    const elements = dataArray.map((item, index) => {
        const id = `${name}-${index}`
        return(
            <ChooseParametrItem 
                key={id} 
                name={name} 
                id={id}
                isChosen={item.isChosen}
                onChange={handleRadioChange}
                value={item.param}
            > 
                {formatParam(item.param)} 
            </ChooseParametrItem>
        )
    });

    return(
        <div className={styles.list}>
            {elements}
        </div>
    );
}

export default ChooseParametr;