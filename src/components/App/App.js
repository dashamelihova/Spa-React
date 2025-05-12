import styles from './App.module.css';
import StartScreen from "../StartScreen/StartScreen"
import Calculator from '../Calculator/Calculator';


function App(){
    return (
        <div className={styles.app}>
            <Calculator/>
            {/* <StartScreen/> */}
        </div>
    )
}

export default App;