import React, { useContext, FC } from "react";
import Router from "next/router";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { ErrorNotFound } from "@/assets/icons";
import { TextButton } from "@/components/Button/TextButton/TextButton";
import { Text } from "@/components/Text/Text";
import styles from "./NotFound.module.scss";

export const ErrorNotFround: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);
  const { back, errors } = state.context.labels;

  return (
    <div className={styles.container}>
      <Text tag="h1" size="large">
        Upsss...
      </Text>
      <ErrorNotFound className={styles.errorIcon} />
      <Text tag="h2" size="normal">
        {errors.wentWrong}
      </Text>
      <TextButton type="button" onClick={() => Router.back()}>
        <Text tag="p" size="small">
          {back}
        </Text>
      </TextButton>
    </div>
  );
};
