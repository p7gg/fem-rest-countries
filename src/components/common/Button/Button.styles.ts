import styled from "styled-components";
import { ButtonStylesProps } from "./Button";

export const ButtonRoot = styled.button<ButtonStylesProps>(
  ({ theme, variant }) => ({
    fontWeight: 600,
    position: "relative",
    lineHeight: 1,
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
    boxSizing: "border-box",
    textDecoration: "none",
    cursor: "pointer",
    appearance: "none",
    WebkitAppearance: "none",
    border: 0,
    borderRadius: 4,
    font: "inherit",
    height: 32,
    padding: "0 12px",
    color: "inherit",

    "&:not(:disabled):active": {
      transform: "translateY(1px)",
    },

    ...(variant === "text" && {
      backgroundColor: "transparent",
    }),

    ...(variant === "contained" && {
      backgroundColor: theme.palette.element,
      boxShadow: theme.shadows.md,
    }),
  })
);

export const ButtonInner = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  overflow: "visible",
});

export const ButtonLabel = styled.span<ButtonStylesProps>(({ uppercase }) => ({
  whiteSpace: "nowrap",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  ...(uppercase && { textTransform: "uppercase" }),
}));

export const ButtonIcon = styled.span({
  display: "flex",
  alignItems: "center",
});
