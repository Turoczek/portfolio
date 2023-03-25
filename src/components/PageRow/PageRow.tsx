import React from 'react';
import styles from './PageRow.module.scss'
import { PageRowProps } from './PageRow.types';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

export const PageRow = ({children, inverted}: PageRowProps) => {

    return (
        <div className={cx(styles.wrapper, inverted && styles.inverted)}>
            {children}
        </div>
    )
}