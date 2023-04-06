import React, { FC } from 'react';
import { TextProps } from './Text.types';
import styles from './Text.module.scss'

export const Text: FC<TextProps> = ({ children, size = "normal", tag = "p" }) => {

    const Tag = tag as keyof JSX.IntrinsicElements;
    return (
        <Tag className={styles[size]}>
            {children}
        </Tag>)
}