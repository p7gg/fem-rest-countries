import { forwardRef } from "react";

import {
  ButtonRoot,
  ButtonInner,
  ButtonLabel,
  ButtonIcon,
} from "./Button.styles";

export interface ButtonStylesProps {
  uppercase?: boolean;
  variant?: "text" | "contained" | "outline";
}

export interface ButtonProps
  extends React.ComponentPropsWithRef<"button">,
    ButtonStylesProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      leftIcon,
      rightIcon,
      uppercase = false,
      variant = "text",
      ...rest
    }: ButtonProps,
    ref
  ) => {
    return (
      <ButtonRoot type="button" variant={variant} ref={ref} {...rest}>
        <ButtonInner>
          {leftIcon && (
            <ButtonIcon style={{ marginRight: 10 }}>{leftIcon}</ButtonIcon>
          )}

          <ButtonLabel uppercase={uppercase}>{children}</ButtonLabel>

          {rightIcon && (
            <ButtonIcon style={{ marginLeft: 10 }}>{rightIcon}</ButtonIcon>
          )}
        </ButtonInner>
      </ButtonRoot>
    );
  }
);

export default Button;
