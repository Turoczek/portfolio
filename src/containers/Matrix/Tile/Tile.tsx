import React, { FC } from "react";
import { Button } from "@mui/material";

import styles from "./Tile.module.scss";
import { TileProps } from "./Tile.types";
import { ItemType } from "../Matrix.types";

const getColor = (type: ItemType) => {
  switch (type) {
    case "normal":
      return "inherit";
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
    case "default":
      return "info";
    case "quaternary":
      return "success";
    case "tertiary":
      return "warning";
    case "empty":
    default:
      return undefined;
  }
};

export const Tile: FC<TileProps> = ({
  item: { description, type },
  handleClick,
  checked,
}) => {
  return (
    <Button
      color={getColor(type)}
      variant="contained"
      className={checked ? styles.checked : styles.normal}
      size="small"
      fullWidth
      onClick={handleClick}
      sx={{
        fontSize: 8,
        color: "black",
      }}
    >
      {description}
    </Button>
  );
};
