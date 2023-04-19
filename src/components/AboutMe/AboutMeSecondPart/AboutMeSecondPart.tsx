import React, { FC } from "react";
import classNames from "classnames/bind";
import { Text } from "@/components/Text/Text";
import styles from "./AboutMe.module.scss";

const cx = classNames.bind(styles);

export const AboutMeSecondPart: FC = () => {
  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.introduction)}>
        <Text tag="h3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          nobis optio error porro architecto doloremque consectetur magni
          nesciunt officiis hic deleniti, corrupti cumque iure quasi provident
          minima blanditiis suscipit perferendis?
        </Text>
      </div>
    </div>
  );
};
