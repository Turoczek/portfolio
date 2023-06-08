export type ItemType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "default"
  | "normal"
  | "empty";

export type Item = {
  id: string;
  type: ItemType;
  description: string;
  popupText?: string;
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
    itemLegend: { id: string; description: string; type: ItemType }[];
    title: string;
    tiers: Tier[];
  };
};
