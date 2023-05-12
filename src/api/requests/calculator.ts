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
      rules: Array<string>;
      price: number;
      idLowerItemPrice?: string;
    };
  };
};
export type ServicesPrices = {
  [id: string]: {
    [id: string]: number;
  };
};

enum PROMOTIONS_ID {
  PRIMARY = 100,
  SECONDARY = 200,
  TERIARY = 300,
}

const servicesPrices: ServicesPrices = {
  // int, tv, phoneSub, decoder, router
  2023: {
    1100: 39,
    2100: 49,
    3100: 29,
    4100: 29,
    5100: 0,
  },
  2024: {
    1100: 49,
    2100: 49,
    3100: 29,
    4100: 29,
    5100: 0,
  },
  2025: {
    1100: 59,
    2100: 59,
    3100: 29,
    4100: 29,
    5100: 0,
  },
};

const promotions: Promotions = {
  // 100 int+tv, 200 int+phoneSub, 300 decoder if 100
  2023: {
    [PROMOTIONS_ID.PRIMARY]: {
      rules: ["1100", "2100"],
      price: 79,
    },
    [PROMOTIONS_ID.SECONDARY]: {
      rules: ["1100", "3100"],
      price: 64,
      idLowerItemPrice: "3100",
    },
    [PROMOTIONS_ID.TERIARY]: {
      rules: ["1100", "2100"],
      price: 0,
    },
  },
  2024: {
    [PROMOTIONS_ID.PRIMARY]: {
      rules: ["1100", "2100"],
      price: 89,
    },
    [PROMOTIONS_ID.SECONDARY]: {
      rules: ["1100", "3100"],
      price: 64,
      idLowerItemPrice: "3100",
    },
    [PROMOTIONS_ID.TERIARY]: {
      rules: ["1100", "2100"],
      price: 0,
    },
  },
  2025: {
    [PROMOTIONS_ID.PRIMARY]: {
      rules: ["1100", "2100"],
      price: 99,
    },
    [PROMOTIONS_ID.SECONDARY]: {
      rules: ["1100", "3100"],
      price: 64,
      idLowerItemPrice: "3100",
    },
    [PROMOTIONS_ID.TERIARY]: {
      rules: ["1100", "2100"],
      price: 0,
    },
  },
};

const checkIfPromotion = (
  options: CalcualtorQuery,
  idsServices: Array<string>,
  idDiscount: PROMOTIONS_ID
) => {
  if (idsServices.every((id) => options.selected.includes(id))) {
    return promotions[options.year][idDiscount].price.toString();
  }
  return undefined;
};

const summaryRestServices = (values: Array<string>, year: string) => {
  if (values.length > 0) {
    return values.reduce((acc, curr) => {
      return acc + servicesPrices[year][curr];
    }, 0);
  }
  return 0;
};

const filterUsedPromotions = (
  idsSelected: Array<string>,
  id: PROMOTIONS_ID,
  year: string
) => {
  return idsSelected.filter((serviceId) => {
    console.log(serviceId !== promotions[year][id].idLowerItemPrice);
    // TODO
    return !promotions[year][id].rules.includes(serviceId);
  });
};

const getPrice = (options: CalcualtorQuery): Price => {
  const { selected, year } = options;
  let idsSelected = [...selected];
  let summaryCost = 0;
  const primaryPromotion = checkIfPromotion(
    options,
    promotions[year][PROMOTIONS_ID.PRIMARY].rules,
    PROMOTIONS_ID.PRIMARY
  );
  const secondaryPromotion = checkIfPromotion(
    options,
    promotions[year][PROMOTIONS_ID.SECONDARY].rules,
    PROMOTIONS_ID.SECONDARY
  );
  const tertiaryPromotion = checkIfPromotion(
    options,
    promotions[year][PROMOTIONS_ID.TERIARY].rules,
    PROMOTIONS_ID.TERIARY
  );

  if (primaryPromotion) {
    idsSelected = filterUsedPromotions(
      idsSelected,
      PROMOTIONS_ID.PRIMARY,
      year
    );
    summaryCost += parseInt(primaryPromotion, 10);
  }

  if (secondaryPromotion) {
    idsSelected = filterUsedPromotions(
      idsSelected,
      PROMOTIONS_ID.SECONDARY,
      year
    );
    summaryCost += parseInt(secondaryPromotion, 10);
  }

  if (tertiaryPromotion) {
    idsSelected = idsSelected.filter(
      (serviceId) =>
        !promotions[year][PROMOTIONS_ID.TERIARY].rules.includes(serviceId)
    );
    summaryCost += parseInt(tertiaryPromotion, 10);
  }
  summaryCost += summaryRestServices(idsSelected, year);

  return {
    currency: "PLN",
    summary: summaryCost.toString(), // + summaryRestServices(idsSelected, year)
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
