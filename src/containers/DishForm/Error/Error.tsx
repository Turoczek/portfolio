import React, { FC } from "react";
import { Text } from "@/components";
import { ErrorProps } from "./Error.types";
import styles from "./Error.module.scss";

export const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <Text tag="p" customClass={styles.error}>
      {message}
    </Text>
  );
};
