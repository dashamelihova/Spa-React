import styles from './AddParametr.module.css';
import icon from '../../assets/artboard.svg';

function AddParametr({text, addItem}){

    return(
        <div className={styles.container}>
            <button className={styles.button} onClick={addItem}>
                <img className={styles.buttonImg} src={icon} alt="Add New Parametr" />
            </button>
            <p className={styles.helpText}>
                {text}
            </p>  
        </div>
    );
}

export default AddParametr;