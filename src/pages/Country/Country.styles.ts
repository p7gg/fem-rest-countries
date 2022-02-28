import styled from "styled-components";

export const Container = styled.div({});

export const Content = styled.div({
  display: "grid",
  marginTop: 35,

  "@media(min-width: 768px)": {
    gridTemplateColumns: "minmax(200px, 400px) 1fr",
    gap: 50,
  },
});

export const Info = styled.div({
  display: "grid",
  columnGap: 15,

  section: {
    "&.title": {
      margin: "20px 0 0",
    },
    "&.section-1, &.section-2, &.section-3": {
      marginTop: 30,
    },

    "@media(min-width: 768px)": {
      "&.title": {
        margin: "0 0 20px",
      },
    },
  },

  div: {
    strong: {
      fontWeight: 600,
    },
    span: {
      marginLeft: 5,
    },
  },

  "@media(min-width: 1000px)": {
    gridTemplateAreas:
      "'title title' 'section-1 section-2' 'section-3 section-3'",

    section: {
      "&.title": {
        gridArea: "title",
      },
      "&.section-1": {
        gridArea: "section-1",
      },
      "&.section-2": {
        gridArea: "section-2",
      },
      "&.section-3": {
        gridArea: "section-3",
      },
    },
  },
});

export const ButtonGroup = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: 15,
  marginTop: 10,
});
