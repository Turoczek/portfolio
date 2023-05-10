import { Services, getData } from "@/api/requests/calculator";
import { assign, createMachine } from "xstate";

type FetchOptions = {
  lang: "en" | "pl";
};

export interface calculatorContext {
  data: Services;
}

export type calculatorMachineEvent =
  | { type: "OPEN" }
  | { type: "NEXT"; options: FetchOptions }
  | { type: "CLOSE"; options: FetchOptions }
  | { type: "SELECT"; options: FetchOptions }
  | { type: "xstate.init"; data: Services }
  | { type: "PREV" }
  | {
      type: "done.invoke.calculator.fetchInitialData:invocation[0]";
      data: Services;
    };

export type calculatorStates =
  | { value: "inactive"; context: calculatorContext }
  | { value: "requesting"; context: calculatorContext }
  | { value: "active"; context: calculatorContext }
  | { value: "active.step1"; context: calculatorContext }
  | { value: "active.step2"; context: calculatorContext };

export const calculatorMachine = createMachine<
  calculatorContext,
  calculatorMachineEvent,
  calculatorStates
>(
  {
    id: "calculator",
    predictableActionArguments: true,
    initial: "fetchInitialData",
    states: {
      fetchInitialData: {
        invoke: {
          src: "getData",
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
        initial: "step1",
        states: {
          step1: {
            on: {
              NEXT: {
                actions: ["applyData"],
                target: "step2",
              },
            },
          },
          step2: {
            on: {
              PREV: {
                target: "step1",
              },
            },
          },
        },
        on: {
          SELECT: {
            target: "requesting",
            actions: ["applyData"],
          },
          CLOSE: {
            target: "inactive",
          },
        },
      },
      requesting: {
        invoke: {
          id: "requesting",
          src: "getData",
          onDone: [
            {
              target: "inactive",
              actions: ["applyData"],
            },
          ],
          onError: [
            {
              target: "error",
            },
          ],
        },
      },
      error: {
        on: {
          SELECT: {
            target: "requesting",
            actions: ["applyData"],
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
        data: (context, event) => {
          if (
            event.type ===
            "done.invoke.calculator.fetchInitialData:invocation[0]"
          ) {
            return event.data;
          }
          return context.data;
        },
      }),
    },
    services: {
      getData: async (context, event) => {
        if (event.type === "SELECT") {
          return getData();
        }
        if (event.type === "xstate.init") {
          return getData();
        }
        return context;
      },
    },
  }
);
