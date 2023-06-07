import { Item } from "../Matrix.types";

export type TileProps = {
  item: Item;
  handleClick?: () => void;
  checked?: boolean;
};
