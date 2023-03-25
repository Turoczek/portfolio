import React from 'react';
import styles from './PageComponent.module.scss'
import { PageComponentProps } from './PageComponent.types';

export const PageComponent = ({children}: PageComponentProps) => {
    
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}