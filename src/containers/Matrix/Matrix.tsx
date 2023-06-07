import React, { FC, useState } from "react";
import { PageRow } from "@/components";

import styles from "./Matrix.module.scss";
import { MatrixData, Tier } from "./Matrix.types";
import { Tile } from "./Tile/Tile";
import { TileTitle } from "./TileTitle/TileTitle";
import { TileLegend } from "./TileLegend/TileLegend";

const renderFlexTiers = (tiers: Tier[], onClick: (key: string) => void) =>
  tiers.map((tier, k) => (
    <React.Fragment key={k}>
      <div className={styles.rowContainer}>
        <TileTitle>{tier.title}</TileTitle>
        <div>
          {tier.rows.map((row, i) => {
            return (
              <ul key={`${k}-${i}`} className={styles.singleRow}>
                {row.items.map((item, j) =>
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
                        handleClick={() => onClick(`${k}-${i}-${j}`)}
                        checked={!!sessionStorage.getItem(`${k}-${i}-${j}`)}
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
            {tier.subTitles.map((sub) => (
              <TileTitle variant="right">{sub}</TileTitle>
            ))}
          </div>
        ) : (
          <TileTitle variant="right" />
        )}
      </div>
      <hr />
    </React.Fragment>
  ));

const renderGridTiers = (tiers: Tier[], onClick: (key: string) => void) =>
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
                {row.items.map((item, c) =>
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
                        handleClick={() => onClick(`2-${a}-${b}-${c}`)}
                        checked={!!sessionStorage.getItem(`2-${a}-${b}-${c}`)}
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
            {tier.subTitles.map((sub) => (
              <TileTitle variant="right">{sub}</TileTitle>
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
  const [rerender, setRerender] = useState<boolean>(false);

  const handleItemClick = (key: string) => {
    const storedItem = sessionStorage.getItem(key);

    if (storedItem) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, "clicked");
    }
    setRerender(!rerender);
  };

  const legendItems = (
    <ul className={styles.itemLegendContainter}>
      {itemLegend.map((item, i) => (
        <li key={i}>
          <TileLegend item={item} />
        </li>
      ))}
    </ul>
  );

  return (
    <PageRow>
      {legendItems}
      <h1>{title}</h1>
      {renderFlexTiers(tiers, handleItemClick)}
      <div className={styles.break}>GÓRA FLEX, DÓŁ GRID</div>
      {renderGridTiers(tiers, handleItemClick)}
    </PageRow>
  );
};
