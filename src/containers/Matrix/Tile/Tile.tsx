import React, { FC } from "react";
import { Button } from "@mui/material";

import styles from "./Tile.module.scss";
import { TileProps } from "./Tile.types";
import { ItemType } from "../Matrix.types";

const getColor = (type: ItemType) => {
  switch (type) {
    case "normal":
      return "#ffcfe0";
    case "primary":
      return "#f5d22b";
    case "secondary":
      return "#e793ba";
    case "default":
      return "#fd9d49";
    case "quaternary":
      return "#69c7c1";
    case "tertiary":
      return "#fff9b2";
    case "empty":
    default:
      return "#000000";
  }
};
export const Tile: FC<TileProps> = ({
  item: { description, type },
  handleClick,
  checked,
}) => {
  const buttonStyle = {
    backgroundColor: getColor(type),
    fontSize: 8,
    color: "black",
  };
  return (
    <Button
      variant="contained"
      className={checked ? styles.checked : styles.normal}
      size="small"
      fullWidth
      onClick={handleClick}
      style={buttonStyle}
    >
      {description}
    </Button>
  );
};
