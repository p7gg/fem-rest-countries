import styled from "styled-components";

export const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: 40,
  padding: "20px 0",
});
