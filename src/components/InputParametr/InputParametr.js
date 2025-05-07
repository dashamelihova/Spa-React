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
        return(
            <div className={styles.container}>
                <label className={styles.lable} htmlFor={name}>
                    {title}
                </label>  
                <input 
                    className={styles.input}
                    type="text" 
                    placeholder={startParam} 
                    id={name}
                    onChange={this.onUpdateInputParam}/>
                
            </div>
        );
    }
}

export default InputParametr;