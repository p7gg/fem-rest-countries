import styled from "styled-components";
import { Sizes } from "../../../types";

export const CardRoot = styled.div<{ shadow: Sizes }>(({ theme, shadow }) => ({
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.element,
  color: theme.palette.text,
  boxShadow: theme.shadows[shadow] || "none",
  boxSizing: "border-box",
  display: "block",
  WebkitTapHighlightColor: "transparent",
  textDecoration: "none",
  borderRadius: 5,
  padding: 14,
}));
