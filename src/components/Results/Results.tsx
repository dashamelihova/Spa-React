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
    // Пример расчётов 
    const pastingArea = Math.ceil(
        (2 * roomHeight * (roomLength + roomWidth) -
        windowsArea -
        doorsArea) * 
        100
    ) / 100; //для округления
    const LengthPolosWall = roomHeight + rapport[0];
    const counPolos = Math.ceil(roomPerimeter / rollParam[0]); //Math.ceil
    const countPolosForWoindow = windowsParam.reduce((sum, win) => sum + win.width / rollParam[0] * win.height, 0) ;
    const countPolosForDoor = doorsParam.reduce((sum, door) => sum + door.width / rollParam[0] * door.height, 0) ;
    const countWallpaper = Math.ceil((counPolos * LengthPolosWall - countPolosForDoor - countPolosForWoindow)*100)/100;

    const countRoll = Math.ceil(countWallpaper / rollParam[1]);
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.title}>Результаты</h2>
                <div className={styles.resultsContainer}>
                    <div className={styles.result}>
                        <p className={styles.resultValue}>{countRoll}</p>
                        <span className={styles.resultLabel}> Кол-во рулонов</span>
                    </div>
                    <div className={styles.result}>
                        <p className={styles.resultValue}>{countWallpaper} м2</p>
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