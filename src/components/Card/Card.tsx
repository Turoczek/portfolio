import React, { FC } from "react";
import { CardProps } from "./Card.types";
import styles from "./Card.module.scss";

export const Card: FC<CardProps> = ({ title }) => (
  <div className={styles.container}>
    <p>{title}</p>
  </div>
);
