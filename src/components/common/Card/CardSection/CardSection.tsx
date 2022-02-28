import { forwardRef } from "react";

import { CardSectionRoot } from "./CardSection.styles";

import { Sizes } from "../../../../types";

export interface CardSectionProps
  extends React.ComponentPropsWithoutRef<"div"> {
  padding?: Sizes;
  first?: boolean;
  last?: boolean;
}

const CardSection = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ padding, first, last, ...rest }, ref) => {
    return (
      <CardSectionRoot
        ref={ref}
        padding={padding}
        first={first}
        last={last}
        {...rest}
      />
    );
  }
);

export default CardSection;
