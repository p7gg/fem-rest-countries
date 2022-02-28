import { forwardRef, Children, cloneElement } from "react";

import { CardSection } from "./CardSection";
import { CardRoot } from "./Card.styles";

import { Sizes } from "../../../types";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  shadow?: Sizes;
}

type CardComponent = ((props: CardProps) => React.ReactElement) & {
  Section: typeof CardSection;
};

const Card: CardComponent = forwardRef<HTMLDivElement, CardProps>(
  ({ children, shadow = "sm", ...rest }, ref) => {
    const _children = Children.toArray(children);

    const content = _children.map((child, index) => {
      if (
        typeof child === "object" &&
        child &&
        "type" in child &&
        child.type === CardSection
      ) {
        return cloneElement(child, {
          first: index === 0,
          last: index === _children.length - 1,
        });
      }

      return child;
    });

    return (
      <CardRoot ref={ref} shadow={shadow} {...rest}>
        {content}
      </CardRoot>
    );
  }
) as any;

Card.Section = CardSection;

export default Card;
