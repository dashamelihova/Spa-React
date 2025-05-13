import React, { ChangeEvent } from 'react';

import styles from './ChooseParametr.module.css';

interface ChooseParametrItemProps {
    children: React.ReactNode;
    name: string;
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isChoosen: boolean;
    value: number[];
}

const ChooseParametrItem: React.FC<ChooseParametrItemProps>=({children, name, id, onChange, isChoosen, value}) => {
    
    return(
        < >
            <input 
                type="radio" 
                id={id} 
                name={name} 
                className={styles.radio}
                onChange={onChange}
                checked={isChoosen} 
                value={value.toString()}
            />
            <label htmlFor={id} className={styles.radioLabel}> {children} </label>
        </>
    );
}


function formatParam(param: number[]):  string{
  let result = '';
  for (let i = 0; i < param.length; i++) {
    if (i > 0) {
      result += ' x ';  // Разделитель между элементами
    }
    result += (param[i] === 0) ? '0' : `${param[i]}м`;
  }
  return result;
}

interface chooseParametrProps{
    dataArray: {param: number[], isChoosen: boolean}[];
    name: string;
    onSelect: (param: number[]) => void;
}

const ChooseParametr: React.FC<chooseParametrProps> = ({dataArray, name, onSelect}) => {
    const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(onSelect){
            onSelect(e.target.value.split(',').map(parseFloat))
        }
    };

    //let id = 0;
    const elements = dataArray.map((item: {param: number[], isChoosen: boolean}, index: number) => {
        const id = `${name}-${index}`
        return(
            <ChooseParametrItem 
                key={id} 
                name={name} 
                id={id}
                isChoosen={item.isChoosen}
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