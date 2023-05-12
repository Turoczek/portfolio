import React, { FC } from "react";
import classNames from "classnames/bind";
import { CardProps } from "./Card.types";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

export const Card: FC<CardProps> = ({
  children,
  onValueChange,
  value,
  isDisabled,
  isChecked,
}) => (
  <li
    className={cx(
      styles.listItem,
      isChecked && styles.listItemChecked,
      isDisabled && styles.listItemDisabled
    )}
  >
    <label className={styles.label}>
      <input
        className={styles.input}
        onChange={onValueChange}
        value={value}
        type="checkbox"
        name="checkbox"
        disabled={isDisabled}
      />
      {children}
    </label>
  </li>
);
