import React from "react";
import { IconWrapper } from "./SelectIcon.styles";

import { MdKeyboardArrowDown } from "react-icons/md";

export interface SelectIconProps
  extends React.ComponentPropsWithoutRef<"div"> {}

const SelectIcon = ({
  children = <MdKeyboardArrowDown />,
  ...rest
}: SelectIconProps) => {
  const clone = React.cloneElement(children as any, {
    role: "presentation",
    focusable: false,
    "aria-hidden": true,
    style: {
      width: "1em",
      height: "1em",
    },
  });

  return (
    <IconWrapper {...rest}>
      {React.isValidElement(children) ? clone : null}
    </IconWrapper>
  );
};

export default SelectIcon;
