import React, { FC } from 'react';
import styles from './AboutMe.module.scss'
import classNames from 'classnames/bind';
import { Text } from '../../Text/Text';


const cx = classNames.bind(styles);

export const AboutMeFirstPart: FC = () => {
    return (
        <div className={cx(styles.wrapper)}>
            <div className={cx(styles.introWrapper)}>
                <Text tag='h1' size='large'>
                    Bartek, Junior React Developer.
                </Text>
            </div>
            <div className={cx(styles.secondIntroWrapper)}>
                <Text tag='h2' size='normal'>
                    Czas na małe zmiany sialalal.
                </Text>
            </div>
        </div>
    )
}