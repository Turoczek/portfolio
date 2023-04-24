import React, { useContext, FC } from "react";
import Router from "next/router";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { Wheelbarrow } from "@/assets/icons";
import styles from "./InProgress.module.scss";

export const InProgress: FC = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);
  const { back, errors } = state.context.labels;
  // TODO
  return (
    <div className={styles.container}>
      <h1>Upsss...</h1>
      <Wheelbarrow className={styles.errorIcon} />
      <h2>{errors.inProgress}</h2>
      <button type="button" onClick={() => Router.back()}>
        {back}
      </button>
    </div>
  );
};
