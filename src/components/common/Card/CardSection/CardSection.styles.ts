import styled from "styled-components";
import { Sizes } from "../../../../types";

export interface CardSectionRootProps {
  padding?: Sizes;
  first?: boolean;
  last?: boolean;
}

export const CardSectionRoot = styled.div<CardSectionRootProps>(
  ({ theme, padding, first, last }) => ({
    display: "block",
    marginLeft: -14,
    marginRight: -14,
    marginTop: first ? -1 * 14 : undefined,
    marginBottom: last ? -1 * 14 : undefined,
  })
);
