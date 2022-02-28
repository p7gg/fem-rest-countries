import styled from "styled-components";

export const SelectRoot = styled.div(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  position: "relative",
  backgroundColor: theme.palette.element,
  color: theme.palette.text,
  borderRadius: 4,
  overflow: "hidden",
}));

export const SelectField = styled.select(({ theme }) => ({
  paddingInlineEnd: "2rem",
  width: "100%",
  minWidth: "0px",
  outline: "transparent solid 2px",
  outlineOffset: "2px",
  position: "relative",
  appearance: "none",
  backgroundColor: "inherit",
  color: "inherit",
  paddingBottom: "1px",
  paddingEng: "2rem",
  lineHeight: 1,
  fontSize: 13,
  paddingInlineStart: 10,
  height: 48,
  border: "none",
}));
