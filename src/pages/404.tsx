import React, { useContext } from "react";
import Router from "next/router";
import { PageRow } from "@/components";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";

const NotFoundPage = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);
  const { back, errors } = state.context.labels;
  // TODO
  return (
    <PageRow>
      <h1>Error</h1>
      <h2>{errors.wentWrong}</h2>
      <button type="button" onClick={() => Router.back()}>
        {back}
      </button>
    </PageRow>
  );
};

export default NotFoundPage;
