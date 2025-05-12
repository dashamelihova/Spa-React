import styles from './ChooseParametr.module.css';

// interface ChooseParametrItemProps {
//     name: string;
// }

function ChooseParametrItem({children, name, id, onChange, isChoosen, value}){
    
    return(
        < >
            <input 
                type="radio" 
                id={id} 
                name={name} 
                className={styles.radio}
                onChange={onChange}
                checked={isChoosen} 
                value={value}
            />
            <label htmlFor={id} className={styles.radioLabel}> {children} </label>
        </>
    );
}


function formatParam(param){
  let result = '';
  for (let i = 0; i < param.length; i++) {
    if (i > 0) {
      result += ' x ';  // Разделитель между элементами
    }
    result += (param[i] === 0) ? '0' : `${param[i]}м`;
  }
  return result;
}

function ChooseParametr({dataArray, name, onSelect}){
    const handleRadioChange = (e) => {
        if(onSelect){
            onSelect(e.target.value.split(',').map(parseFloat))
        }
    };

    //let id = 0;
    const elements = dataArray.map((item, index) => {
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