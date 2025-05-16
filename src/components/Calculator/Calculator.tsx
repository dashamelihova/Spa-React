import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import InputParametr from '../InputParametr/InputParametr';
import Button from '../Button/Button';
import closeBtn from '../../assets/close-lg.svg';
import AddParametr from '../AddParametr/AddParametr';
import ChooseParametr from '../ChooseParametr/ChooseParametr';
import ListAddedParametr from '../AddedParametr/AddedParametr';
import Results from '../Results/Results';

import styles from './Calculator.module.css';

interface ParamItem{
  param: number[];
}

interface ParamData {
  height: number;
  width: number;
  id: number;
}

interface CalculatorState {
  rollParam: ParamItem[];
  rapport: ParamItem[];
  windowsParam: ParamData[];
  doorsParam: ParamData[];
  chosenRollParam: number[]; // [width, length]
  chosenRapport: number[]; // [rapport]
  roomLength: number;
  roomWidth: number;
  roomHeight: number;
  showResults: boolean;
}

interface CalculatorProps{
    onClick: () => void;
}

const Calculator: React.FC<CalculatorProps> = () => {
    const navigate = useNavigate();
    const initialState: CalculatorState = {
    rollParam: [
      { param: [1.06, 10] },
      { param: [1.06, 25] },
    ],
    rapport: [
      { param: [0] },
      { param: [0.32] },
      { param: [0.64] },
    ],
    windowsParam: [],
    doorsParam: [],
    chosenRollParam: [1.06, 10],
    chosenRapport: [0],
    roomLength: 6.5,
    roomWidth: 6.5,
    roomHeight: 6.5,
    showResults: false,
  };
    const [state, setState] = useState<CalculatorState>(initialState);

    const [maxId, setMaxId] = useState<number>(0);
    const formRef = useRef<HTMLFormElement>(null);

    const addItem = (prop: "windowsParam" | "doorsParam") => {
        const newItem = {
            height: 0,
            width: 0,
            id: maxId,
        }
        setState((prevState) => ({
            ...prevState,
            [prop]: [...prevState[prop], newItem]
        }));
        setMaxId(maxId + 1);
    }

    const deleteItem = (id: number, prop: "windowsParam" | "doorsParam") => {
        setState((prevState) => ({
            ...prevState,
            [prop]: prevState[prop].filter((item: ParamData) => item.id !== id),
            
        }));
    }

    const getFormInfo = (e: React.FormEvent<HTMLFormElement>) => {
        function getFormData(name: string, value: any){
            const getValue = formData.get(name);
            if(!getValue){
                formData.set(name, value);
                return value;
            }
            return getValue;
        }
        e.preventDefault(); // Предотвращаем обновление страницы
        const formData = new FormData(e.currentTarget);

        
        // Собираем данные комнаты
        const roomLength = parseFloat(getFormData("lengthM", 6.5) as string);
        const roomWidth = parseFloat(getFormData("widthM", 6.5) as string);
        const roomHeight = parseFloat(getFormData("heightM", 6.5) as string);
        // Собираем данные окон
        const windowsParam = state.windowsParam.map((item: ParamData) => ({
            height: parseFloat(getFormData(`height-windowsParam-${item.id}`, 0) as string),
            width: parseFloat(getFormData(`width-windowsParam-${item.id}`, 0) as string),
            id: item.id,
        }));

        // Собираем данные дверей
        const doorsParam = state.doorsParam.map((item: ParamData) => ({
            height: parseFloat(getFormData(`height-doorsParam-${item.id}`, 0) as string),
            width: parseFloat(getFormData(`width-doorsParam-${item.id}`, 0) as string),
            id: item.id,
        }));

        // Собираем раппорт и параметры рулона
        const rapport = (formData.get("rapport") as string).split(',').map(parseFloat);
        const rollParam = (formData.get("rollParam") as string).split(',').map(parseFloat);

        // Передаём данные в Results через state или props
        setState((prevState) => ({
            ...prevState,
            roomLength,
            roomWidth,
            roomHeight,
            windowsParam,
            doorsParam,
            chosenRapport: rapport,
            chosenRollParam: rollParam,
            showResults: true,
        }));
    }

     const resetForm = () => {
        setState(initialState);
        setMaxId(0);
        if (formRef.current) {
            formRef.current.reset();
        }
     }
    
    return(
        <form className={styles.wrapper} id="Form" onSubmit={getFormInfo} ref={formRef}>
            <div className={styles.main}>

                <img className={styles.closeBtn} 
                    src={closeBtn} 
                    alt="Close Button" 
                    onClick={() => navigate('/', {replace: false})}
                />

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Параметры комнаты</h2>
                    <div className={styles.inputContainer}>
                        <InputParametr 
                            title={'Длина м'} 
                            startParam={6.5} 
                            name={'lengthM'}
                            disabled={state.showResults}
                        />
                        <InputParametr 
                            title={'Ширина м'} 
                            startParam={6.5} 
                            name={'widthM'}
                            disabled={state.showResults}
                        />
                        <InputParametr 
                            title={'Высота м'} 
                            startParam={6.5} 
                            name={'heightM'}
                            disabled={state.showResults}
                        />
                    </div>
                </div>

                <div className={styles.chooseParametrContainer}>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Парметры рулона</h2>
                        <ChooseParametr 
                            dataArray={state.rollParam} 
                            name="rollParam" 
                            disabled={state.showResults}
                            />
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Раппорт</h2>
                        <ChooseParametr 
                            dataArray={state.rapport} 
                            name="rapport"
                            disabled={state.showResults}
                            />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Параметры окон</h2>
                    <div className={styles.addedParamContainer}>
                        <ListAddedParametr
                            title='Окно'
                            name='windowsParam'
                            data={state.windowsParam} 
                            onDelete={(id) => deleteItem(id, 'windowsParam')}
                            disabled={state.showResults}
                        />
                        <AddParametr 
                            text='Добавить окно'
                            addItem={() => addItem('windowsParam')}
                            disabled={state.showResults}
                        />
                    </div>
                    
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Параметры дверей</h2>
                    <div className={styles.addedParamContainer}>
                        <ListAddedParametr
                            title='Дверь' 
                            name='doorsParam'
                            data={state.doorsParam} 
                            onDelete={(id) => deleteItem(id, 'doorsParam')}
                            disabled={state.showResults}
                        />
                        <AddParametr 
                            text='Добавить дверь' 
                            addItem={() => addItem('doorsParam')} 
                            disabled={state.showResults}
                            />
                    </div>   
                </div>
                <hr />
            </div>
        
            <div className={styles.footer}>
                {
                    state.showResults ? 
                        <Results
                            roomLength={state.roomLength}
                            roomWidth={state.roomWidth}
                            roomHeight={state.roomHeight}
                            windowsParam={state.windowsParam}
                            doorsParam={state.doorsParam}
                            rollParam={state.chosenRollParam}
                            rapport={state.chosenRapport}
                            onReset={resetForm}
                        />
                        : 
                        <Button type="submit" formName='Form' onClick={undefined}>Рассчитать материалы</Button>
                    
                }
                

            </div>
        </form>
    );
}

export default Calculator;