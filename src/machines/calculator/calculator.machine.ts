import { Services, getData } from "@/api/requests/calculator";
import { assign, createMachine } from "xstate";

export interface calculatorContext {
  data: Services;
  selected: Array<string>;
}

export type calculatorMachineEvent =
  | { type: "OPEN" }
  | { type: "NEXT"; selected: Array<string> }
  | { type: "CLOSE" }
  | { type: "xstate.init"; data: Services }
  | { type: "PREV"; selected: Array<string> }
  | {
      type: "done.invoke.requesting";
      data: Services;
    }
  | {
      type: "done.invoke.calculator.fetchInitialData:invocation[0]";
      data: Services;
    }
  | { type: "CALCULATE"; data: { selected: Array<string>; year: string } };

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
              CLOSE: {
                target: "#inactive",
              },
            },
          },
          step2: {
            on: {
              PREV: {
                target: "step1",
              },
              CALCULATE: {
                target: "requesting",
              },
            },
          },
          requesting: {
            invoke: {
              id: "requesting",
              src: "getData",
              onDone: [
                {
                  target: "#calculator.inactive",
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
          error: {},
        },
      },
      error: {},
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
          if (event.type === "done.invoke.requesting") {
            return event.data;
          }
          return context.data;
        },
        selected: (context, event) => {
          if (event.type === "NEXT") {
            return event.selected;
          }
          return context.selected;
        },
      }),
    },
    services: {
      getData: async (context, event) => {
        if (event.type === "CALCULATE") {
          return getData({
            selected: event.data.selected,
            year: event.data.year,
          });
        }
        if (event.type === "xstate.init") {
          return getData();
        }
        return context;
      },
    },
  }
);
