import styles from './AddedParametr.module.css';
import closeBtn from '../../assets/close-lg.svg';
import InputParametr from '../InputParametr/InputParametr';

function AddedParametr({name, title, data, onDelete, onUpdateInputParam}){
    return (
        <div className={styles.addedParametrContainer}>
            <div className={styles.addedParametrHeader}>
                <p className={styles.addedParametrLabel}> {title} </p>
                {/* <button className={styles.addedParametrCloseButton} onClick={onDelete}> */}
                    <img 
                        className={styles.addedParametrCloseButtonIcon} 
                        src={closeBtn} 
                        alt="Close Button" 
                        onClick={onDelete}
                    />
                {/* </button> */}
                
            </div>
            
            <div className={styles.addedParametrInputContainer}>
                <InputParametr 
                    title={'Высота м'} 
                    startParam={0} 
                    name={`height-${name}`}
                    onUpdateInputParam={(param) => onUpdateInputParam(param, `doors.height`)}
                />
                    
                <InputParametr 
                    title={'Ширина м'} 
                    startParam={0} 
                    name={`width-${name}`}
                    onUpdateInputParam={(param) => onUpdateInputParam(param, `${name}.width`)}
                />
            </div>
            
        </div>
    );
}

function ListAddedParametr({data, name, title, onDelete, onUpdateInputParam}){
    const elements = data.map(item => {
        const id = item.id;
        const nameItem = `${name}-${id}`;
        return(
            <AddedParametr 
                data={item} 
                name={nameItem} 
                title={title} 
                key={id}
                onDelete={() => onDelete(id)}
                onUpdateInputParam={onUpdateInputParam}
            />
        );
    })
    return(
        <>
            {elements}
        </>
    );
}

export default ListAddedParametr;