import React, { FC, useState } from "react";
import { PageRow } from "@/components";

import { Dialog, DialogTitle } from "@mui/material";
import styles from "./Matrix.module.scss";
import { ItemType, MatrixData, Tier } from "./Matrix.types";
import { Tile } from "./Tile/Tile";
import { TileTitle } from "./TileTitle/TileTitle";

const renderFlexTiers = (
  tiers: Tier[],
  onClick: (key: string, message?: string) => void,
  filters: ItemType[]
) =>
  tiers.map((tier, k) => (
    <React.Fragment key={k}>
      <div className={styles.rowContainer}>
        <TileTitle>{tier.title}</TileTitle>

        <div>
          {tier.rows.map((row, i) => {
            return (
              <ul key={`${k}-${i}`} className={styles.singleRow}>
                {row.items
                  .filter((item) => filters.includes(item.type))
                  .map((item, j) =>
                    item.type === "empty" ? (
                      <li
                        key={`${k}-${i}-${j}`}
                        className={styles.emptyItemContainer}
                      />
                    ) : (
                      <li
                        key={`${k}-${i}-${j}`}
                        className={styles.singleItemContainer}
                      >
                        <Tile
                          item={item}
                          handleClick={() => onClick(item.id, item.popupText)}
                          checked={!!sessionStorage.getItem(item.id)}
                        />
                      </li>
                    )
                  )}
              </ul>
            );
          })}
        </div>
        {tier.subTitles ? (
          <div className={styles.subTitlesContainer}>
            {tier.subTitles.map((sub, i) => (
              <TileTitle key={i} variant="right">
                {sub}
              </TileTitle>
            ))}
          </div>
        ) : (
          <TileTitle variant="right" />
        )}
      </div>
      <hr />
    </React.Fragment>
  ));

const renderGridTiers = (
  tiers: Tier[],
  onClick: (key: string, message?: string) => void,
  filters: ItemType[]
) =>
  tiers.map((tier, a) => (
    <React.Fragment key={a}>
      <div className={styles.rowContainer}>
        <TileTitle>{tier.title}</TileTitle>
        <div>
          {tier.rows.map((row, b) => {
            return (
              <ul
                key={`2-${a}-${b}`}
                className={styles[`singleRow-${row.items.length}`]}
              >
                {row.items
                  .filter((item) => filters.includes(item.type))
                  .map((item, c) =>
                    item.type === "empty" ? (
                      <li
                        key={`2-${a}-${b}-${c}`}
                        className={styles.emptyItemContainer}
                      />
                    ) : (
                      <li
                        key={`2-${a}-${b}-${c}`}
                        className={styles.singleItemContainer}
                      >
                        <Tile
                          item={item}
                          handleClick={() => onClick(item.id, item.popupText)}
                          checked={!!sessionStorage.getItem(item.id)}
                        />
                      </li>
                    )
                  )}
              </ul>
            );
          })}
        </div>
        {tier.subTitles ? (
          <div className={styles.subTitlesContainer}>
            {tier.subTitles.map((sub, i) => (
              <TileTitle key={i} variant="right">
                {sub}
              </TileTitle>
            ))}
          </div>
        ) : (
          <TileTitle variant="right" />
        )}
      </div>
      <hr />
    </React.Fragment>
  ));

export const Matrix: FC<MatrixData> = ({
  data: { itemLegend, title, tiers },
}) => {
  const [popupText, setPopupText] = useState<string>("a");
  const [rerender, setRerender] = useState<boolean>(false);
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<ItemType[]>([
    ...itemLegend.map((el) => el.type),
    "empty",
  ]);

  const handleFilter = (type: ItemType) => {
    if (filters.includes(type)) {
      setFilters(filters.filter((filter) => filter !== type));
    } else {
      setFilters([...filters, type]);
    }
  };

  const handleItemClick = (key: string, message?: string) => {
    const storedItem = sessionStorage.getItem(key);

    if (storedItem) {
      sessionStorage.removeItem(key);
      setRerender(!rerender);
    } else {
      sessionStorage.setItem(key, "clicked");
      if (message) {
        setPopupText(message);
        setPopupOpen(!isPopupOpen);
      } else {
        setRerender(!rerender);
      }
    }
  };

  const renderItemLegends = () => {
    return (
      <ul className={styles.itemLegendContainter}>
        {itemLegend.map((item, i) => (
          <li key={i}>
            <Tile
              item={item}
              handleClick={() => handleFilter(item.type)}
              checked={!filters.includes(item.type)}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <PageRow>
      {renderItemLegends()}
      <h1>{title}</h1>
      {renderFlexTiers(tiers, handleItemClick, filters)}
      <div className={styles.break}>GÓRA FLEX, DÓŁ GRID</div>
      {renderGridTiers(tiers, handleItemClick, filters)}

      <Dialog open={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <DialogTitle>{popupText}</DialogTitle>
      </Dialog>
    </PageRow>
  );
};
