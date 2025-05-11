import { Component } from 'react';

import styles from './InputParametr.module.css';

class InputParametr extends Component{

    constructor(props){
        super(props);
        this.state ={
            param: ''
        };
    }

    onUpdateInputParam = (e) =>{
        const param = e.target.value || this.props.startParam;
        this.setState({param});
        this.props.onUpdateInputParam(param);
    }

    render(){
        const {title, startParam, name} = this.props;
        const {param} = this.state;
        return(
            <div className={styles.inputParameter}>
                <label className={styles.inputParameterLabel} htmlFor={name}>
                    {title}
                </label>  
                <input 
                    className={styles.inputParameterInput}
                    type="text" 
                    placeholder={startParam} 
                    id={name}
                    onChange={this.onUpdateInputParam}
                    value={param}
                />
            </div>
        );
    }
}

export default InputParametr;