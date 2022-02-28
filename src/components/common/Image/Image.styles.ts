import styled from "styled-components";

export const ImageRoot = styled.div({});

export const Figure = styled.figure({
  margin: 0,
});

export const ImageWrapper = styled.div({
  position: "relative",
});

export const Img = styled.img({
  display: "block",
  width: "100%",
  height: "100%",
  border: 0,
});

export const Caption = styled.figcaption(({ theme }) => ({
  color: theme.palette.text,
  marginTop: 12,
}));

export const Placeholder = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text,
  backgroundColor: theme.palette.element,
}));
