import React, { ChangeEvent } from 'react';

import styles from './ChooseParametr.module.css';

interface ChooseParametrItemProps {
    children: string;
    name: string;
    id: string;
    isChosen: boolean;
    value: number[];
    disabled?: boolean;
}

interface ChooseParametrProps{
    dataArray: {param: number[]}[];
    name: string;
    disabled?: boolean;
}

const ChooseParametrItem: React.FC<ChooseParametrItemProps>=({children, name, id, isChosen, value, disabled}) => {
    return(
        < >
            <input 
                type="radio" 
                id={id} 
                name={name} 
                className={styles.radio}
                defaultChecked={isChosen} 
                value={value.toString()}
                disabled={disabled}
            />
            <label htmlFor={id} className={styles.radioLabel}> {children} </label>
        </>
    );
}

const ChooseParametr: React.FC<ChooseParametrProps> = ({dataArray, name, disabled}) => {
    const formatParam = (param: number[]):  string => {
        return param.map(num => (num === 0 ? '0' : `${num}м`)).join(' x ');
    }

    const elements = dataArray.map((item, index) => {
        const id = `${name}-${index}`
        const isChosen = index === 0 ? true : false;
        return(
            <ChooseParametrItem 
                key={id} 
                name={name} 
                id={id}
                isChosen={isChosen}
                value={item.param}
                disabled={disabled}
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