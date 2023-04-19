import { assign, createMachine, sendParent } from "xstate";

import { pure } from "xstate/lib/actions";

interface Errors {
  data: {
    statusCode: number;
    message: string;
  };
}

export interface FetchMachineContext<T> {
  data: T;
  parent?: boolean;
  error: Record<string, unknown>;
}

export type FetchMachineEvent<T, G> =
  | { type: "FETCH"; token: string; params?: G }
  | { type: "UPDATE"; data: T }
  | { type: "error.platform.UPDATE"; data: Errors }
  | { type: "done.invoke.UPDATE"; data: T };

export type FetchMachineStates<S> =
  | { value: "idle"; context: S }
  | { value: "pending"; context: S }
  | { value: "successful"; context: S }
  | { value: "failed"; context: S }
  | { value: "loading"; context: S };

export const createFetchMachine = <T, G, S extends FetchMachineContext<T>>(
  method: (token: string, params?: G) => Promise<T>,
  handleSuccess?: (data: T, event: FetchMachineEvent<T, G>) => void,
  handleError?: (data: T, event: FetchMachineEvent<T, G>) => void
) => {
  return createMachine<
    FetchMachineContext<T>,
    FetchMachineEvent<T, G>,
    FetchMachineStates<S>
  >(
    {
      id: "fetchMachine",
      predictableActionArguments: true,
      initial: "idle",
      states: {
        idle: {
          on: {
            FETCH: {
              target: "pending",
            },
            UPDATE: {
              target: "pending",
            },
          },
        },
        pending: {
          invoke: {
            id: "UPDATE",
            src: "update",
            onDone: {
              target: "successful",
              actions: ["setResults", "sendResultsToParent"],
            },
            onError: {
              target: "failed",
              actions: "sendErrorToParent",
            },
          },
        },
        failed: {
          on: {
            FETCH: "pending",
          },
          invoke: {
            src: "showError",
            onDone: {
              target: "idle",
            },
          },
        },
        successful: {
          on: {
            FETCH: "pending",
          },
          invoke: {
            src: "showSuccess",
            onDone: {
              target: "idle",
            },
          },
        },
      },
    },
    {
      actions: {
        setResults: assign({
          data: (context, event) => {
            if (event.type === "done.invoke.UPDATE") {
              return event.data;
            }
            return context.data;
          },
        }),
        sendResultsToParent: pure((ctx) =>
          ctx.parent
            ? sendParent((context) => {
                return {
                  type: "RESULTS",
                  data: context.data,
                };
              })
            : undefined
        ),
        sendErrorToParent: pure((ctx) =>
          ctx.parent
            ? sendParent((_, event) => {
                if (event.type === "error.platform.UPDATE") {
                  return {
                    type: "ERROR",
                    data: event.data.data.statusCode,
                  };
                }
                return event;
              })
            : undefined
        ),
      },
      services: {
        update: async (context, event) => {
          if (event.type === "FETCH") return method(event.token, event.params);

          if (event.type === "UPDATE") return event.data;

          return context.data;
        },
        showSuccess: (context, event) => {
          handleSuccess && handleSuccess(context.data, event);
          return Promise.resolve();
        },
        showError: (context, event) => {
          handleError && handleError(context.data, event);
          return Promise.resolve();
        },
      },
    }
  );
};
