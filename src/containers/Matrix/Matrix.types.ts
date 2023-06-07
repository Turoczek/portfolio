export type ItemType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "default"
  | "normal"
  | "empty";

export type Item = {
  type: ItemType;
  description: string;
};

export type Row = {
  items: Item[];
};

export type Tier = {
  title: string;
  rows: Row[];
  subTitles?: Array<string>;
};

export type MatrixData = {
  data: {
    itemLegend: {
      description: string;
      type: ItemType;
    }[];
    title: string;
    tiers: Tier[];
  };
};
