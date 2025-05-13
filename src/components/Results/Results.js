import { Component } from 'react'
import styles from './Results.module.css'

class Results extends Component{
    constructor(props){
        super(props);
        //room p
    }

    render(){
        const countRoll = 57;
        const countWallpaper = 604.2;
        const pastingArea = 1800
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

export default Results