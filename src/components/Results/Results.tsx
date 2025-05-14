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
}

const Results: React.FC<ResultsProps> = ({roomLength, roomWidth, roomHeight, windowsParam, doorsParam, rollParam, rapport}) => {
    const windowsArea = windowsParam.reduce((sum, win) => sum + win.height * win.width, 0);
    const doorsArea = doorsParam.reduce((sum, door) => sum + door.height * door.width, 0);
    // Пример расчётов 
    const pastingArea = Math.ceil(
        (2 * roomHeight * (roomLength + roomWidth) -
        windowsArea -
        doorsArea) * 
        100
    ) / 100; //для округления

    const stripLength = roomHeight + rapport[0]; // 4. Длина полотна с учетом раппорта
    const pRoom =  2 * (roomLength + roomWidth);
    // 6. Количество полотен на стену (с учетом ширины рулона)
    const stripsNeededPerWall = pRoom / rollParam[0] - windowsArea / rollParam[0] - doorsArea / rollParam[0];
    
    // 5. Количество полотен из рулона
    const stripsPerRoll = rollParam[1] / roomHeight;
    const wallArea = 2 * roomHeight * (roomLength + roomWidth);
    const res = Math.ceil(stripsNeededPerWall / stripsPerRoll);
    

    //(пока без учета окон и дверей)
    const countRoll = 
        Math.ceil(
            ((2 * (roomLength + roomWidth)) / rollParam[0]) / (rollParam[1] / (roomHeight + rapport[0]))
        ); 

    //(пока без учета окон и дверей)
    const countWallpaper = Math.ceil(
        ((2 * (roomLength + roomWidth)) / rollParam[0]) * roomHeight * 100
    ) / 100;

    
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
                <button className={styles.btn} type='button'>Сбросить параметры</button>
                <button className={styles.btn} type='button'>Перейти в каталог</button> 
            </div>
        </div>
    );
} 

export default Results;