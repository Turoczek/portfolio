import React, { FC } from "react";
import classNames from "classnames/bind";
import { TextButtonProps } from "./TextButton.types";
import styles from "./TextButton.module.scss";

const cx = classNames.bind(styles);

export const TextButton: FC<TextButtonProps> = ({
  children,
  size = "normal",
  href,
  disabled,
  variant = "primary",
  type = "button",
  ...props
}) => {
  return href ? (
    <a
      className={cx(styles[variant], styles[size])}
      aria-disabled={disabled}
      href={href}
      {...props}
    >
      {children}
    </a>
  ) : (
    <button
      className={cx(styles[variant], styles[size])}
      aria-disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
