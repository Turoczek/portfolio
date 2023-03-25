import { HeaderProps } from '@/components/Header/Header.types';
import React from 'react';
import styles from './Header.module.scss';
import { Text } from '@/components/Text/Text';
import Link from 'next/link';

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
                                    <Link href={el.url} className={styles.navigationLink}>
                                        {el.name}
                                    </Link>
                                </Text>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <ul className={styles.navigationRight}>
                <li>
                    <Link href='/register' className={styles.button}>
                        Register
                    </Link>
                </li>
            </ul>
        </div>
    )
}