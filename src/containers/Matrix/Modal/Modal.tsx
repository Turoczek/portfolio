import React, { FC } from "react";

import { Box, Button, Modal as ModalMui } from "@mui/material";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";

export const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  onChange,
  children,
}) => {
  return (
    <ModalMui sx={{ display: "flex" }} open={isOpen} onClose={onChange}>
      <Box
        sx={{
          margin: "auto",
          width: 400,
          minHeight: 400,
          backgroundColor: "white",
          textAlign: "center",
          borderRadius: 4,
          position: "relative",
        }}
      >
        <h2>{title}</h2>
        <Button
          sx={{ position: "absolute", top: 16, right: 0 }}
          onClick={() => onChange(false)}
          variant="text"
        >
          X
        </Button>
        <div className={styles.contentWrapper}>{children}</div>
      </Box>
    </ModalMui>
  );
};
