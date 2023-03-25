import React from 'react'; //
import { TextProps } from './text.types';
import styles from './Text.module.scss'

export const Text = ({ children, size = "normal", tag = "p" }: TextProps) => {
    
    const Tag = tag as keyof JSX.IntrinsicElements;
    return (
    <Tag className={styles[size]}>
        {children}
    </Tag>)
}