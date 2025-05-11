import styles from './AddParametr.module.css';
import icon from '../../assets/artboard.svg';

function AddParametr({text, addItem}){

    return(
        <div className={styles.addParametrContainer}>
            <button className={styles.addParametrButton} onClick={addItem}>
                <img className={styles.addParametrButtonIcon} src={icon} alt="Add New Parametr" />
            </button>
            <p className={styles.addParametrHelpText}>
                {text}
            </p>  
        </div>
    );
}

export default AddParametr;