import { HeaderProps } from '@/components/Header/Header.types';
import React from 'react';
import styles from './Header.module.scss';
import { Text } from '@/components/Text/Text';

export const Header = ({ navItems }: HeaderProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>

            </div>
            <nav className={styles.navigationInner}>
                <ul className={styles.navigation}>
                    {navItems.map((el, i) => {
                        return (
                            <li key={i} className={styles.navigationItem}>
                                <Text>
                                    <a href={el.url} className={styles.navigationLink}>
                                        {el.name}
                                    </a>
                                </Text>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <ul className={styles.navigationRight}>
                <li>
                    <a href='/register' className={styles.button}>
                        Register
                    </a>
                </li>
            </ul>
        </div>
    )
}