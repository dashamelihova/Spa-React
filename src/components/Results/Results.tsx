import React from 'react'
import styles from './Results.module.css'

interface ResultsProps{
    roomLength: number;
    roomWidth: number;
    roomHeight: number;
    windowsParam: {height: number, width: number, id: number}[];
    doorsParam: {height: number, width: number, id: number}[];
    rollParam: number[];
    rapport: number[];
    onReset: () => void
}

const Results: React.FC<ResultsProps> = ({roomLength, roomWidth, roomHeight, windowsParam, doorsParam, rollParam, rapport, onReset}) => {
    const windowsArea = windowsParam.reduce((sum, win) => sum + win.height * win.width, 0);
    const doorsArea = doorsParam.reduce((sum, door) => sum + door.height * door.width, 0);
    // 1. Расчет периметра комнаты
    const roomPerimeter = 2 * (roomLength + roomWidth);
    // Площадь оклейки
    const pastingArea = Math.ceil(
        (2 * roomHeight * (roomLength + roomWidth) - windowsArea - doorsArea) * 100
    ) / 100; //для округления
    // Суммарная ширина окон и дверей
    const windowsWidth = windowsParam.reduce((sum, win) => sum + win.width, 0);
    const doorsWidth = doorsParam.reduce((sum, door) => sum + door.width, 0);
    //оклеиваемый периметр
    const effectivePerimeter = roomPerimeter - windowsWidth - doorsWidth;
    //Количество полос
    const stripCount = Math.ceil(effectivePerimeter / rollParam[0]);
    //stripCount = ceil(roomPerimeter / rollParam[0])
    
    //Длина одной полосы с учётом раппорта
    const stripLength = rapport[0] > 0 ? Math.ceil(roomHeight / rapport[0]) * rapport[0] : roomHeight;
    //Количество обоев в м²
    const wallpaperArea = stripCount * stripLength;
    //Количество полос в одном рулоне
    const stripsPerRoll = Math.floor(rollParam[1] / stripLength);
    //Количество рулонов
    const rollCount = Math.ceil(stripCount / stripsPerRoll);

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.title}>Результаты</h2>
                <div className={styles.resultsContainer}>
                    <div className={styles.result}>
                        <p className={styles.resultValue}>{rollCount}</p>
                        <span className={styles.resultLabel}> Кол-во рулонов</span>
                    </div>
                    <div className={styles.result}>
                        <p className={styles.resultValue}>{wallpaperArea} м2</p>
                        <span className={styles.resultLabel}> Кол-во m2 обоев</span>
                    </div>
                    <div className={styles.result}>
                        <p className={styles.resultValue}>{pastingArea} м2</p>
                        <span className={styles.resultLabel}>Площадь оклейки</span>
                    </div>
                </div>
            </div>
            

            <div className={styles.footer}>
                <button className={styles.btn} type='button' onClick={onReset}>Сбросить параметры</button>
                <button className={`${styles.btn} ${styles.btnGreen}`} type='button'>Перейти в каталог</button> 
            </div>
        </div>
    );
} 

export default Results;