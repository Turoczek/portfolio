import React, { FC } from "react";
import classNames from "classnames/bind";
import { Text } from "@/components/Text/Text";
import styles from "./AboutMe.module.scss";

const cx = classNames.bind(styles);

export const AboutMeFirstPart: FC = () => {
  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.introWrapper)}>
        <Text tag="h1" size="xlarge">
          Bartosz Trzonek, Frontend Developer.
        </Text>
      </div>
      <div className={cx(styles.secondIntroWrapper)}>
        <Text tag="h2" size="large">
          Nowe wyzwania napędzają mnie do pracy. <br />
          React i Node to moi ulubieńcy.
        </Text>
      </div>
    </div>
  );
};
