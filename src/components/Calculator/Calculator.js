import { Component } from 'react';

import InputParametr from '../InputParametr/InputParametr';
import Button from '../Button/Button';
import closeBtn from '../../assets/close-lg.svg';
import AddParametr from '../AddParametr/AddParametr';
import ChooseParametr from '../ChooseParametr/ChooseParametr';
import ListAddedParametr from '../AddedParametr/AddedParametr';
import Results from '../Results/Results';

import styles from './Calculator.module.css';



class Calculator extends Component{
    constructor(props){
        super(props);
        this.state ={
            rollParam:[
                {param: [1.06, 10], isChoosen: true},
                {param: [1.06, 25], isChoosen: false},
            ],
            rapport:[
                {param: [0], isChoosen: true},
                {param: [0.32], isChoosen: false},
                {param: [0.64], isChoosen: false},
            ],
            windowsParam:[
                
            ],
            doorsParam: [
                
            ],
            choosenRollParam: [1.06, 10],
            choosenRapport: [0],
            roomLength: 6.5,
            roomWidth: 6.5,
            roomHeigth: 6.5,
        };
        this.maxId = 0;
    }

    onUpdateInputParam = (param, prop) =>{
        this.setState({[prop]: param});
    }

    handleParamSelect = (param, prop) => {
        this.setState((prevState) => ({
            [prop]: prevState[prop].map(item => ({
                ...item,
                isChoosen: item.param.toString() === param.toString()
            })),
            [`choosen${prop.charAt(0).toUpperCase() + prop.slice(1)}`]: param,
        }));
    }

    addItem = (prop) => {
        const newItem = {
            length: 0,
            width: 0,
            id: this.maxId++
        }
        this.setState((prevState) => {
            const newArr = [...prevState[prop], newItem];
            return{
                [prop]: newArr
            }
        });
    }

    deleteItem = (id, prop) => {
        this.setState((prevState) => {
            return{
                [prop]: prevState[prop].filter(item => item.id !== id)
            }
        })
    }

    render(){
        const {
            rollParam, 
            rapport,
            roomParam, 
            choosenRoolParam, 
            choosenRapport,
            roomLength,
            roomHeigth,
            roomWidth,
            windowsParam,
            doorsParam
        } = this.state;
        return(
            <div className={styles.wrapper}>
                <div className={styles.main}>

                    <img className={styles.closeBtn} src={closeBtn} alt="Close Button" />

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Параметры комнаты</h2>
                        <div className={styles.inputContainer}>
                            <InputParametr 
                                title={'Длина м'} 
                                startParam={6.5} 
                                name={'lengthM'}
                                onUpdateInputParam={(param) => this.onUpdateInputParam(param, 'roomLength')}/>
                            <InputParametr 
                                title={'Ширина м'} 
                                startParam={6.5} 
                                name={'widthM'}
                                onUpdateInputParam={(param) => this.onUpdateInputParam(param, 'roomWidth')}/>
                            <InputParametr 
                                title={'Высота м'} 
                                startParam={6.5} 
                                name={'heightM'}
                                onUpdateInputParam={(param) => this.onUpdateInputParam(param, 'roomHeigth')}/>
                        </div>
                    </div>

                    <div className={styles.chooseParametrContainer}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Парметры рулона</h2>
                            <ChooseParametr 
                                dataArray={rollParam} 
                                name="rollParam" 
                                onSelect={(param) => this.handleParamSelect(param, "rollParam" )}
                                />
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Раппорт</h2>
                            <ChooseParametr 
                                dataArray={rapport} 
                                name="rapport"
                                onSelect={(param) => this.handleParamSelect(param, "rapport" )}
                                />
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Параметры окон</h2>
                        <div className={styles.addedParamContainer}>
                            <ListAddedParametr
                                title='Окно'
                                name='windowsParam'
                                data={windowsParam} 
                                onDelete={(id) => this.deleteItem(id, 'windowsParam')}
                                onUpdateInputParam={this.onUpdateInputParam}
                            />
                            <AddParametr 
                                text='Добавить окно'
                                addItem={() => this.addItem('windowsParam')}
                            />
                        </div>
                        
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Параметры дверей</h2>
                        <div className={styles.addedParamContainer}>
                            <ListAddedParametr
                                title='Дверь' 
                                name='doorsParam'
                                data={doorsParam} 
                                onDelete={(id) => this.deleteItem(id, 'doorsParam')}
                                onUpdateInputParam={this.onUpdateInputParam}
                            />
                            <AddParametr 
                                text='Добавить дверь' 
                                addItem={() => this.addItem('doorsParam')} 
                                />
                        </div>   
                    </div>
                    <hr />
                </div>
            
                <div className={styles.footer}>

                    {/* <Button>Рассчитать материалы</Button> */}

                    <Results/>
                </div>
            </div>
        );
    }
    
}

export default Calculator;