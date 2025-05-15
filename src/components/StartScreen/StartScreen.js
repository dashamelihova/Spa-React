import styles from "./StartScreen.module.css"
import Button from "../Button/Button";

function StartScreen({onClick}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <h1 className={styles.title}>Калькулятор обоев</h1>
                <p className={styles.text}>Онлайн-калькулятор расчета обоев по поможет вам определить число рулонов, требуемых для оклеивания, с учетом окон и дверей. Чтобы получить точные результаты, просто укажите параметры помещения и размеры в специальной таблице. Наша программа также берет в учет повторение рисунка (раппорт), что позволяет оптимизировать расходы на материалы и клей.</p>
            </div>
            <div className={styles.footer}>
                <Button type="button" onClick={onClick}> Начать расчет материалов</Button>
            </div>
        </div>
    );
}

export default StartScreen;