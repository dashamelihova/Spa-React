import styles from "./StartScreen.module.css"
import Button from "../Button/Button";
import {useNavigate} from 'react-router-dom';

function StartScreen(){
    const navigate = useNavigate();

    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <h1 className={styles.title}>Калькулятор обоев</h1>
                <p className={styles.text}>Онлайн-калькулятор расчета обоев поможет вам определить число рулонов, требуемых для оклеивания, с учетом окон и дверей. Чтобы получить точные результаты, просто укажите параметры помещения и размеры в специальной таблице. Наша программа также берет в учет повторение рисунка (раппорт), что позволяет оптимизировать расходы на материалы и клей.</p>
            </div>
            <div className={styles.footer}>
                <Button type="button" onClick={() => navigate('/calc', {replace: false})}> Начать расчет материалов</Button>
            </div>
        </div>
    );
}

export default StartScreen;