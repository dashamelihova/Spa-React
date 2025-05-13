import React, { Component } from 'react'
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

class Results extends Component<ResultsProps>{


    render(){
        const {roomLength, roomWidth, roomHeight, windowsParam, doorsParam, rollParam, rapport} = this.props;
        // Пример расчётов (замени на реальную логику)
        const countRoll = Math.ceil((roomLength * roomWidth * roomHeight) / (rollParam[0] * rollParam[1]));
        const countWallpaper = roomLength * roomWidth * 2 + roomLength * roomHeight * 2 + roomWidth * roomHeight * 2;
        const pastingArea =
            countWallpaper -
            windowsParam.reduce((sum, win) => sum + win.height * win.width, 0) -
            doorsParam.reduce((sum, door) => sum + door.height * door.width, 0);
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
                   <button className={styles.btn}>Сбросить параметры</button>
                    <button className={styles.btn}>Перейти в каталог</button> 
                </div>
            </div>
        );
    }
} 

export default Results;