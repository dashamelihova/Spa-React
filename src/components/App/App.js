import styles from './App.module.css';
import StartScreen from "../StartScreen/StartScreen"
import Calculator from '../Calculator/Calculator';
import {useState} from 'react';

function App(){

    const [isStartScreen, setIsStartScreen] = useState(true);

    return (
        <div className={styles.app}>
            {/* <Calculator/> */}
            {isStartScreen ? 
                <StartScreen onClick={() => setIsStartScreen(false)}/> : 
                <Calculator onClick={() => setIsStartScreen(true)}/>}
        </div>
    )
}

export default App;