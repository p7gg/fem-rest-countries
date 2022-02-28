import styled from "styled-components";

export const Container = styled.main({});

export const Content = styled.div({
  maxWidth: 1200,
  width: "100%",
  margin: "0 auto",
  padding: "20px",

  "@media(max-width: 500px)": {
    padding: "20px 10px",
  },
});
