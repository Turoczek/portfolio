import React, { FC } from "react";
import { Button } from "@mui/material";

import styles from "./Tile.module.scss";
import { TileProps } from "./Tile.types";
import { ItemType } from "../Matrix.types";

const getColor = (type: ItemType) => {
  switch (type) {
    case "normal":
      return "#ff0000";
    case "primary":
      return "#b25c20";
    case "secondary":
      return "#808080";
    case "default":
      return "#0000cc";
    case "quaternary":
      return "#00cc00";
    case "tertiary":
      return "#ffcc00";
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
