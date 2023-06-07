import React, { FC } from "react";
import { Card } from "@mui/material";

import { ItemType } from "../Matrix.types";
import { TileProps } from "../Tile/Tile.types";

const getColor = (type: ItemType) => {
  switch (type) {
    case "normal":
      return "#e0e0e0";
    case "primary":
      return "#1976d2";
    case "secondary":
      return "#9c27b0";
    case "default":
      return "#0288d1";
    case "quaternary":
      return "#2e7d32";
    case "tertiary":
      return "#ed6c02";
    case "empty":
    default:
      return undefined;
  }
};

export const TileLegend: FC<TileProps> = ({ item: { description, type } }) => {
  return (
    <Card sx={{ backgroundColor: getColor(type), padding: 2 }}>
      {description}
    </Card>
  );
};
