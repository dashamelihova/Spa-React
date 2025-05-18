import {BrowserRouter, Routes, Route} from 'react-router-dom';

import styles from './App.module.css';
import StartScreen from "../StartScreen/StartScreen"
import Calculator from '../Calculator/Calculator';

function App(){
    return (

        <div className={styles.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartScreen/>}/>
                    <Route path="/calc" element={<Calculator/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;