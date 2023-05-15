import { CalcualtorQuery } from "../types";

export type Dependencies = {
  [id: string]: Array<number>;
};

export type Service = {
  [id: string]: string;
};

export type Price = {
  currency: string;
  summary: string;
};

export type Services = {
  services: Service;
  dependencies: Dependencies;
  prices?: Price;
};

export type Promotions = {
  [id: string]: {
    [key in PROMOTIONS_ID]: {
      rules: Array<number>;
      price: number;
      justLowerItemPrice?: boolean;
    };
  };
};

export type ServicesPrices = {
  [id: string]: {
    [id: string]: number;
  };
};

type PriceVariant = {
  price: number;
  notCalculatedServices: Array<number>;
};

enum PROMOTIONS_ID {
  PRIMARY = 100,
  SECONDARY = 200,
  TERIARY = 300,
}

enum SERVICES {
  INTERNET = 1100,
  TV = 2100,
  PHONESUB = 3100,
  DECODER = 4100,
  ROUTER = 5100,
}

const servicesPrices: ServicesPrices = {
  2023: {
    [SERVICES.INTERNET]: 39,
    [SERVICES.TV]: 49,
    [SERVICES.PHONESUB]: 29,
    [SERVICES.DECODER]: 29,
    [SERVICES.ROUTER]: 0,
  },
  2024: {
    [SERVICES.INTERNET]: 49,
    [SERVICES.TV]: 49,
    [SERVICES.PHONESUB]: 29,
    [SERVICES.DECODER]: 29,
    [SERVICES.ROUTER]: 0,
  },
  2025: {
    [SERVICES.INTERNET]: 59,
    [SERVICES.TV]: 59,
    [SERVICES.PHONESUB]: 29,
    [SERVICES.DECODER]: 29,
    [SERVICES.ROUTER]: 0,
  },
};

const promotions: Promotions = {
  // 100 int+tv, 200 int+phoneSub, 300 decoder if 100
  2023: {
    [PROMOTIONS_ID.PRIMARY]: {
      rules: [SERVICES.INTERNET, SERVICES.TV],
      price: 79,
    },
    [PROMOTIONS_ID.SECONDARY]: {
      rules: [SERVICES.INTERNET, SERVICES.PHONESUB],
      price: 64,
    },
    [PROMOTIONS_ID.TERIARY]: {
      rules: [SERVICES.INTERNET, SERVICES.TV],
      price: 0,
      justLowerItemPrice: true,
    },
  },
  2024: {
    [PROMOTIONS_ID.PRIMARY]: {
      rules: [SERVICES.INTERNET, SERVICES.TV],
      price: 89,
    },
    [PROMOTIONS_ID.SECONDARY]: {
      rules: [SERVICES.INTERNET, SERVICES.PHONESUB],
      price: 64,
    },
    [PROMOTIONS_ID.TERIARY]: {
      rules: [SERVICES.INTERNET, SERVICES.TV],
      price: 0,
      justLowerItemPrice: true,
    },
  },
  2025: {
    [PROMOTIONS_ID.PRIMARY]: {
      rules: [SERVICES.INTERNET, SERVICES.TV],
      price: 99,
    },
    [PROMOTIONS_ID.SECONDARY]: {
      rules: [SERVICES.INTERNET, SERVICES.PHONESUB],
      price: 64,
    },
    [PROMOTIONS_ID.TERIARY]: {
      rules: [SERVICES.INTERNET, SERVICES.TV],
      price: 0,
      justLowerItemPrice: true,
    },
  },
};

const getPricesVariants = (
  year: string,
  idsSelected: Array<number>
): PriceVariant[] => {
  const availablePromotions = Object.entries(promotions[year]).filter((e) =>
    e[1].rules.every(
      (rule) => idsSelected.includes(rule) && !e[1].justLowerItemPrice
    )
  );
  const result = [];

  for (let i = 0; i < availablePromotions.length; i += 1) {
    let price = 0;
    let used: Array<number> = [];
    if (
      availablePromotions[i][1].rules.every(
        (ruleId) => idsSelected.includes(ruleId) && !used.includes(ruleId)
      )
    ) {
      price += availablePromotions[i][1].price;
      used = [...used, ...availablePromotions[i][1].rules];
    }
    result.push({
      price,
      notCalculatedServices: idsSelected.filter((id) => !used.includes(id)),
    });
  }
  return result;
};

const getBestPrice = (pricesVariants: PriceVariant[], year: string) => {
  // if(pricesVariants.every((variant) => (variant.notCalculatedServices.length === 0))) {
  //   return pricesVariants
  // }
  if (pricesVariants.length === 1) {
    return pricesVariants[0].price;
  }
  return Math.min(
    ...pricesVariants.map((variant) => {
      return (
        variant.price + servicesPrices[year][variant.notCalculatedServices[0]]
      );
    })
  );
};

const getPrice = (options: CalcualtorQuery): Price => {
  const { selected, year } = options;
  const idsSelected = [...selected].map((el) => parseInt(el, 10));

  const pricesVariants = getPricesVariants(year, idsSelected);

  return {
    currency: "PLN",
    summary:
      pricesVariants.length === 0
        ? idsSelected
            .reduce((acc, curr) => acc + servicesPrices[year][curr], 0)
            .toString()
        : getBestPrice(pricesVariants, year).toString(),
  };
};

export const getData = async (
  // token?: string, // In future
  options?: CalcualtorQuery
): Promise<Services> =>
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
      prices: options ? getPrice(options) : undefined,
    });
  });
