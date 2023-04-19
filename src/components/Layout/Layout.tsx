import React, { FC, useContext } from "react";
import { Header, PageRow, ScrollToTop } from "@/components";
import { GlobalStateContext } from "@/providers/GlobalStateProvider";
import { useActor } from "@xstate/react";
import Head from "next/head";
import { LayoutProps } from "./Layout.types";

export const Layout: FC<LayoutProps> = ({ children }) => {
  const globalServices = useContext(GlobalStateContext);
  const { languageService } = globalServices;
  const [state] = useActor(languageService);

  if (state.matches("getInitialTranslate")) return null;

  return (
    <>
      <Head>
        <title>Turok porfolio</title>
        <link rel="icon" type="image/png" sizes="32x32" href="logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="logo.png" />

        <meta name="robots" content="noindex" />
      </Head>
      <PageRow>
        <Header />
      </PageRow>
      {children}
      <ScrollToTop />
    </>
  );
};
