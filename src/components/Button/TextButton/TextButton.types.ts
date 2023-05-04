import { ReactNode } from "react";

type ButtonTextType = JSX.IntrinsicElements["button"] &
  JSX.IntrinsicElements["a"];

export interface TextButtonProps extends ButtonTextType {
  children?: ReactNode | string;
  variant?: "primary";
  size?: "small" | "normal" | "large";
  disabled?: boolean;
}
