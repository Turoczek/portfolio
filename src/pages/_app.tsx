import React from "react";
import { Layout } from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { GlobalStateProvider } from "@/providers/GlobalStateProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalStateProvider>
  );
}
