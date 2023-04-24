import React, { FC, useContext } from "react";
import classNames from "classnames/bind";
import { Text } from "@/components/Text/Text";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import styles from "./AboutMe.module.scss";

const cx = classNames.bind(styles);

export const AboutMeSecondPart: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);

  const { description } = state.context.labels.startPage;

  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.introduction)}>
        <Text tag="h3">{description}</Text>
      </div>
    </div>
  );
};
