import styles from './ChooseParametr.module.css';


function Parametr({children, name, id, onChange, isChoosen}){
    
    return(
        < >
            <input 
                type="radio" 
                id={id} 
                name={name} 
                className={styles.radio}
                onChange={onChange}
                checked={isChoosen} 
                value={children}
            />
            <label htmlFor={id} className={styles.radioLabel}> {children} </label>
        </>
    );
}

function ChooseParametr({dataArray, name, onSelect}){
    const handleRadioChange = (e) => {
        if(onSelect){
            onSelect(e.target.value)
        }
    };

    //let id = 0;
    const elements = dataArray.map((item, index) => {
        const id = `${name}-${index}`
        return(
            <Parametr 
                key={id} 
                name={name} 
                id={id}
                isChoosen={item.isChoosen}
                onChange={handleRadioChange}
            > 
                {item.param} 
            </Parametr>
        )
    });

    return(
        <div className={styles.list}>
            {elements}
        </div>
    );
}

export default ChooseParametr;