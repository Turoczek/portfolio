import { ChangeEvent, ReactNode } from "react";

export type CardProps = {
  value: string | number;
  onValueChange: (value: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  isDisabled?: boolean;
  isChecked?: boolean;
};
