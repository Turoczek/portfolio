import React, { ReactNode, createContext } from "react";
import { useInterpret } from "@xstate/react";

import { languageSwitcherMachine } from "@/machines/language/language.machine";
import { calculatorMachine } from "@/machines/calculator/calculator.machine";
import { ActorRefFrom } from "xstate";
import { getCurrentLanguage } from "@/utils/getCurrentLanguage";

interface GlobalStateContextType {
  languageService: ActorRefFrom<typeof languageSwitcherMachine>;
  calculatorService: ActorRefFrom<typeof calculatorMachine>;
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

  const calculatorService = useInterpret(calculatorMachine, {
    devTools: true,
    context: undefined,
  });

  return (
    // eslint-disable-next-line
    <GlobalStateContext.Provider value={{ languageService, calculatorService }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
