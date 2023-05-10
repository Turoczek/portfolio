import React, { FC } from "react";
import classNames from "classnames/bind";
import { TextProps } from "./Text.types";
import styles from "./Text.module.scss";

const cx = classNames.bind(styles);

export const Text: FC<TextProps> = ({
  children,
  size = "normal",
  tag = "p",
  customClass,
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag className={cx(styles[size], styles[tag], customClass)}>{children}</Tag>
  );
};
