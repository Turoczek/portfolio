import { getTranslation } from "@/api/requests/languageTranslations";
import { assign, createMachine } from "xstate";
import { Labels } from "./language.types";

type FetchOptions = {
  lang: "en" | "pl";
};

// const fetchMachine = createFetchMachine(getTranslation('pl'));

// type fetchMachineRef = ActorRefFrom<typeof fetchMachine>;

export interface languageSwitcherContext {
  // fetchMachineRef?: fetchMachineRef;
  labels: Labels;
  options: FetchOptions;
}

export type languageSwitcherMachineEvent =
  | { type: "UPDATE"; options: FetchOptions }
  | { type: "OPEN"; options: FetchOptions }
  | { type: "CLOSE"; options: FetchOptions }
  | { type: "FETCH"; options: FetchOptions }
  | {
      type: "done.invoke.requesting";
      data: { labels: Labels; options: FetchOptions };
    }
  | {
      type: "done.invoke.languageSwitcher.getInitialTranslate:invocation[0]";
      data: { labels: Labels; options: FetchOptions };
    }
  | {
      type: "xstate.init";
      data: { labels: Labels; options: FetchOptions };
    };

export type languageSwitcherStates =
  | { value: "inactive"; context: languageSwitcherContext }
  | { value: "active"; context: languageSwitcherContext }
  | { value: "getInitialTranslate"; context: languageSwitcherContext }
  | { value: "requesting"; context: languageSwitcherContext };

export const languageSwitcherMachine = createMachine<
  languageSwitcherContext,
  languageSwitcherMachineEvent,
  languageSwitcherStates
>(
  {
    id: "languageSwitcher",
    predictableActionArguments: true,
    initial: "getInitialTranslate",
    states: {
      getInitialTranslate: {
        invoke: {
          src: "translate",
          onDone: [
            {
              target: "inactive",
              actions: "applyData",
            },
          ],
          onError: [{ target: "error" }],
        },
      },
      inactive: {
        id: "inactive",
        on: {
          OPEN: {
            target: "active",
          },
        },
      },
      active: {
        id: "active",
        on: {
          UPDATE: {
            target: "requesting",
          },
          CLOSE: {
            target: "inactive",
          },
        },
      },
      requesting: {
        invoke: {
          id: "requesting",
          src: "translate",
          onDone: [
            {
              target: "inactive",
              actions: "applyData",
            },
          ],
          onError: [{ target: "error" }],
        },
      },
      error: {
        on: {
          UPDATE: {
            target: "requesting",
          },
          CLOSE: {
            target: "inactive",
          },
        },
      },
    },
  },
  {
    actions: {
      applyData: assign({
        labels: (context, event) => {
          if (
            event.type === "done.invoke.requesting" ||
            event.type ===
              "done.invoke.languageSwitcher.getInitialTranslate:invocation[0]"
          ) {
            return event.data.labels;
          }
          return context.labels;
        },
        options: (context, event) => {
          if (event.type === "done.invoke.requesting") {
            return {
              lang: event.data.options.lang,
            };
          }
          return {
            lang: context.options.lang,
          };
        },
      }),
    },
    services: {
      translate: async (context, event) => {
        if (event.type === "UPDATE") {
          localStorage.setItem("language", event.options.lang);
          return {
            options: {
              lang: event.options.lang,
            },
            labels: await getTranslation(event.options.lang),
          };
        }
        if (event.type === "xstate.init") {
          localStorage.setItem("language", context.options.lang);
          return {
            options: {
              lang: context.options.lang,
            },
            labels: await getTranslation(context.options.lang),
          };
        }
        return context;
      },
    },
  }
);
