import React, { ReactNode, createContext } from "react";
import { useInterpret } from "@xstate/react";

import { languageSwitcherMachine } from "@/machines/language/language.machine";
import { ActorRefFrom } from "xstate";
import { getCurrentLanguage } from "@/utils/getCurrentLanguage";

interface GlobalStateContextType {
  languageService: ActorRefFrom<typeof languageSwitcherMachine>;
}

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateContext = createContext({} as GlobalStateContextType);

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const languageService = useInterpret(languageSwitcherMachine, {
    devTools: true,
    context: {
      options: {
        lang: getCurrentLanguage(),
      },
    },
  });

  return (
    // eslint-disable-next-line
    <GlobalStateContext.Provider value={{ languageService  }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
