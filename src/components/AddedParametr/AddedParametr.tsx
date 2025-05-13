import React from 'react';

import closeBtn from '../../assets/close-lg.svg';
import InputParametr from '../InputParametr/InputParametr';

import styles from './AddedParametr.module.css';

interface AddedParametrProps{
    name: string;
    title: string;
    data: {height: number, width: number, id: number};
    onDelete: () => void;
}

const AddedParametr: React.FC<AddedParametrProps> = ({name, title, data, onDelete}) => {
    return (
        <div className={styles.addedParametrContainer}>
            <div className={styles.addedParametrHeader}>
                <p className={styles.addedParametrLabel}> {title} </p>
                {/* <button className={styles.addedParametrCloseButton} onClick={onDelete}> */}
                    <img 
                        className={styles.addedParametrCloseButtonIcon} 
                        src={closeBtn} 
                        alt="Close Button" 
                        onClick={onDelete}
                    />
                {/* </button> */}
                
            </div>
            
            <div className={styles.addedParametrInputContainer}>
                <InputParametr 
                    title={'Высота м'} 
                    startParam={0} 
                    name={`height-${name}`}
                />
                    
                <InputParametr 
                    title={'Ширина м'} 
                    startParam={0} 
                    name={`width-${name}`}
                />
            </div>
            
        </div>
    );
}

interface ListAddedParametrProps{
    name: string;
    title: string;
    data: {height: number, width: number, id: number}[];
    onDelete: (id: number) => void;
}

const ListAddedParametr: React.FC<ListAddedParametrProps> = ({data, name, title, onDelete}) => {
    const elements = data.map(item => {
        const id = item.id;
        const nameItem = `${name}-${id}`;
        return(
            <AddedParametr 
                data={item} 
                name={nameItem} 
                title={title} 
                key={id}
                onDelete={() => onDelete(id)}
            />
        );
    })
    return(
        <>
            {elements}
        </>
    );
}

export default ListAddedParametr;