import { HeaderProps } from '@/components/Header/Header.types';
import React, { FC } from 'react';
import styles from './Header.module.scss';
import { Text } from '@/components/Text/Text';
import Link from 'next/link';
import { Logo, Css3, Html, Javascript, Nodejs, Reactsvg, Typescript } from '@/assets/icons';

export const Header: FC<HeaderProps> = ({ navItems }) => {
    return (
        <div className={styles.wrapper}>
            <Logo className={styles.icon} />
            <nav>
                <ul className={styles.navigation}>
                    {navItems.map((el, i) => {
                        return (
                            <li key={i} className={styles.navigationItem}>
                                <Text size='small'>
                                    <Link href={el.url} className={styles.navigationLink}>
                                        {el.name}
                                    </Link>
                                </Text>
                            </li>
                        )
                    })}
                </ul>

                <button className={styles.burger}>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </button>
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