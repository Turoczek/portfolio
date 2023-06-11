import React, { FC, ReactNode } from "react";

import styles from "../Modal.module.scss";
import { ModalActionsProps } from "./ModalActions.types";

export const ModalActions: FC<ModalActionsProps> = ({ children }) => {
  return (
    <div className={styles.actionsWrapper}>
      <div className={styles.actionsInnerWrapper}>
        {children.map((el: ReactNode, i: number) => {
          return <React.Fragment key={i}>{el}</React.Fragment>;
        })}
      </div>
    </div>
  );
};
