import styled from "styled-components";

export const Container = styled.header(({ theme }) => ({
  backgroundColor: theme.palette.element,
  boxShadow: theme.shadows.sm,
}));

export const Content = styled.div({
  minHeight: 64,
  maxWidth: 1200,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 auto",
  padding: "0 20px",

  h1: {
    fontSize: 23,
    fontWeight: 800,
  },

  "@media(max-width: 500px)": {
    padding: "0 0 0 10px",

    h1: {
      fontSize: 20,
    },
  },
});
