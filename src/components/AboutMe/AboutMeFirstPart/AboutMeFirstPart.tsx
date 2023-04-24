import React, { FC, useContext } from "react";
import classNames from "classnames/bind";
import { Text } from "@/components/Text/Text";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import styles from "./AboutMe.module.scss";

const cx = classNames.bind(styles);

export const AboutMeFirstPart: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);

  const { title, subTitle } = state.context.labels.startPage;
  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.introWrapper)}>
        <Text tag="h1" size="xlarge">
          {title}
        </Text>
      </div>
      <div className={cx(styles.secondIntroWrapper)}>
        <Text tag="h2" size="large">
          {subTitle}
        </Text>
      </div>
    </div>
  );
};
