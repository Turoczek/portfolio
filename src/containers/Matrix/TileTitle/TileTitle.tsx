import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./TileTitle.module.scss";

import { TileTitleProps } from "./TileTitle.types";

const cx = classNames.bind(styles);

export const TileTitle: FC<TileTitleProps> = ({
  children,
  variant = "left",
}) => {
  return children ? (
    <p className={cx(styles.container, styles[variant])}>{children}</p>
  ) : (
    <span className={styles.emptyContainer} />
  );
};
