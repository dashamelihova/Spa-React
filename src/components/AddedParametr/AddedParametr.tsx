import React from 'react';

import closeBtn from '../../assets/close-lg.svg';
import InputParametr from '../InputParametr/InputParametr';

import styles from './AddedParametr.module.css';

interface AddedParametrProps{
    name: string;
    title: string;
    data: {height: number, width: number, id: number};
    onDelete: () => void;
    disabled?: boolean;
}

const AddedParametr: React.FC<AddedParametrProps> = ({name, title, data, onDelete, disabled}) => {
    return (
        <div className={styles.addedParametrContainer}>
            <div className={styles.addedParametrHeader}>
                <p className={styles.addedParametrLabel}> {title} </p>
                <button className={styles.addedParametrCloseButton} disabled={disabled} onClick={onDelete}>
                    <img 
                        className={styles.addedParametrCloseButtonIcon} 
                        src={closeBtn} 
                        alt="Close Button" 
                    />
                </button>
                
            </div>
            
            <div className={styles.addedParametrInputContainer}>
                <InputParametr 
                    title={'Высота м'} 
                    startParam={0} 
                    name={`height-${name}`}
                    disabled={disabled}
                />
                    
                <InputParametr 
                    title={'Ширина м'} 
                    startParam={0} 
                    name={`width-${name}`}
                    disabled={disabled}
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
    disabled?: boolean;
}

const ListAddedParametr: React.FC<ListAddedParametrProps> = ({data, name, title, onDelete, disabled}) => {
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
                disabled={disabled}
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