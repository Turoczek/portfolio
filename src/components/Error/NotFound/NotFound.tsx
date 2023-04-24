import React, { useContext, FC } from "react";
import Router from "next/router";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { ErrorNotFound } from "@/assets/icons";
import styles from "./NotFound.module.scss";

export const ErrorNotFround: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);
  const { back, errors } = state.context.labels;
  // TODO
  return (
    <div className={styles.container}>
      <h1>Upsss...</h1>
      <ErrorNotFound className={styles.errorIcon} />
      <h2>{errors.wentWrong}</h2>
      <button type="button" onClick={() => Router.back()}>
        {back}
      </button>
    </div>
  );
};
