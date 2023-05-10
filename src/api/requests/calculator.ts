export type Dependencies = {
  [id: number]: Array<number>;
};

export type Service = {
  [id: number]: string;
};

export type Services = {
  services: Service;
  dependencies: Dependencies;
  prices: {
    currency: string;
    summary: number;
  };
};

export const getData = async (): Promise<Services> =>
  new Promise((resolve) => {
    resolve({
      services: {
        1100: "internet",
        2100: "tv",
        3100: "phoneSub",
        4100: "decoder",
        5100: "router",
      },
      dependencies: {
        4100: [2100],
        5100: [1100],
      },
      prices: {
        currency: "PLN",
        summary: 1000,
      },
    });
  });
