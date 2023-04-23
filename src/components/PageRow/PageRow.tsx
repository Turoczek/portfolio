import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./PageRow.module.scss";
import { PageRowProps } from "./PageRow.types";

const cx = classNames.bind(styles);

export const PageRow: FC<PageRowProps> = ({
  children,
  inverted,
  defaultPaddingTopBottom,
}) => {
  if (inverted) {
    return (
      <div
        className={cx(
          styles.inverted,
          defaultPaddingTopBottom && styles.paddingTopBottom
        )}
      >
        <div className={cx(styles.invertedInner)}>{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        defaultPaddingTopBottom && styles.paddingTopBottom
      )}
    >
      {children}
    </div>
  );
};
