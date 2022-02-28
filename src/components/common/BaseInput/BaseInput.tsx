import { forwardRef } from "react";

import { UnstyledInput } from "./BaseInput.styles";

export interface BaseInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  fullWidth?: boolean;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ fullWidth, ...rest }, ref) => (
    <UnstyledInput ref={ref} fullWidth={fullWidth} {...rest} />
  )
);

export default BaseInput;
