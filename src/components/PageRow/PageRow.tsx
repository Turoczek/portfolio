import React, { FC } from 'react';
import styles from './PageRow.module.scss'
import { PageRowProps } from './PageRow.types';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

export const PageRow: FC<PageRowProps> = ({ children, inverted }) => {

    if (inverted) {
        return (
            <div className={cx(styles.inverted)}>
                <div className={cx(styles.invertedInner)}>
                    {children}
                </div>
            </div>
        )
    }

    return (
        <div className={cx(styles.wrapper)}>
            {children}
        </div>
    )
}