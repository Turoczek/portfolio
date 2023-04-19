import { PageRow } from "@/components";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import React, { useContext } from "react";

const Main = () => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);

  return <PageRow>TODO</PageRow>;
};
export default Main;
