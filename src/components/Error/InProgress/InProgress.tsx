import React, { useContext, FC } from "react";
import Router from "next/router";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { Wheelbarrow } from "@/assets/icons";
import { TextButton } from "@/components/Button/TextButton/TextButton";
import { Text } from "@/components/Text/Text";
import styles from "./InProgress.module.scss";

export const InProgress: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);
  const { back, errors } = state.context.labels;
  // TODO
  return (
    <div className={styles.container}>
      <Text tag="h1" size="large">
        Upsss...
      </Text>
      <Wheelbarrow className={styles.errorIcon} />
      <Text tag="h2" size="normal">
        {errors.inProgress}
      </Text>
      <TextButton type="button" onClick={() => Router.back()}>
        <Text tag="p" size="small">
          {back}
        </Text>
      </TextButton>
    </div>
  );
};
