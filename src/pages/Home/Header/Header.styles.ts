import styled from "styled-components";

export const HeaderRoot = styled.header({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 15,

  "@media(min-width: 500px)": {
    flexDirection: "row",
    alignItems: "center",
  },
});

export const SearchBar = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 20,
  flex: "1 0",
  width: "100%",

  backgroundColor: theme.palette.element,
  boxShadow: theme.shadows.xs,
  padding: "10px 20px",
  borderRadius: 5,

  "@media(min-width: 500px)": {
    flex: "0 1 350px",
  },
}));

export const SelectWrapper = styled.div(({ theme }) => ({
  maxWidth: 200,
  width: "100%",
  boxShadow: theme.shadows.xs,
  borderRadius: 5,
}));
