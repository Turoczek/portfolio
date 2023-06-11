import { ReactNode } from "react";

export type ModalProps = {
  title: string;
  isOpen: boolean;
  onChange: (open: boolean) => void;
  children: ReactNode;
};
