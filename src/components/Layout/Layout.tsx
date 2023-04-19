import React, { FC, useContext } from "react";
import { Header, PageRow, ScrollToTop } from "@/components";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import { LayoutProps } from "./Layout.types";

export const Layout: FC<LayoutProps> = ({ children }) => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);

  if (state.matches("getInitialTranslate")) return null;

  return (
    <>
      <PageRow>
        <Header />
      </PageRow>
      {children}
      <ScrollToTop />
    </>
  );
};
