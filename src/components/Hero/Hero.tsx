import React, { FC } from 'react';
import styles from './Hero.module.scss'
// import { AboutMeProps } from './AboutMe.types';
import classNames from 'classnames/bind';
import { Hero as HeroSvg } from '@/assets/icons';

type HeroProps = {
    children: React.ReactNode,
}

const cx = classNames.bind(styles);

export const Hero: FC<HeroProps> = ({ children }) => {
    return (
        <HeroSvg className={cx(styles.test)}>
            {children}
        </HeroSvg>
    )
}