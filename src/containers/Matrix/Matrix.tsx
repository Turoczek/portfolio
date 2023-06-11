import React, { FC, useState } from "react";
import { PageRow } from "@/components";

import { Button } from "@mui/material";
import styles from "./Matrix.module.scss";
import { ItemType, MatrixData, Tier } from "./Matrix.types";
import { Tile } from "./Tile/Tile";
import { TileTitle } from "./TileTitle/TileTitle";
import { Modal } from "./Modal/Modal";
import { ModalActions } from "./Modal/ModalActions/ModalActions";

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
      </div>
      <hr />
    </React.Fragment>
  ));

export const Matrix: FC<MatrixData> = ({
  data: { itemLegend, title, tiers },
}) => {
  const [modalTitle, setModalTitle] = useState<string>("x");
  const [rerender, setRerender] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
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
        setModalTitle(message);
        setModalOpen(!isModalOpen);
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
      {renderGridTiers(tiers, handleItemClick, filters)}
      <Modal
        title={modalTitle}
        isOpen={isModalOpen}
        onChange={() => setModalOpen(!isModalOpen)}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptas
          vero, est eos cupiditate reiciendis.
        </p>
        <ModalActions>
          <Button
            onClick={() => setModalOpen(false)}
            sx={{ flex: 1 }}
            variant="contained"
          >
            Zamknij
          </Button>
          <Button sx={{ flex: 1, marginLeft: 4 }} variant="contained">
            Wykonaj akcje
          </Button>
        </ModalActions>
      </Modal>
    </PageRow>
  );
};
